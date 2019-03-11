<?php

namespace Infinety\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Infinety\MenuBuilder\Models\MenuItem;

class Menu extends Model
{
    /**
     * @var string
     */
    protected $defaultParentTag = 'ul';

    /**
     * @var string
     */
    protected $defaultChildTag = 'li';

    /**
     * Boot
     */
    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->slug = str_slug($model->name);
        });
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(MenuItem::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function parentItems(): HasMany
    {
        return $this->hasMany(MenuItem::class)->whereNull('parent_id');
    }

    /**
     * Return menu items
     *
     * @return  Collection
     */
    public function optionsMenu()
    {
        return $this->parentItems() //->where('enabled', 1)
            ->orderby('parent_id')
            ->orderby('order')
            ->orderby('name')
            ->get();
    }

    /**
     * Return enabled menu items
     *
     * @return  Collection
     */
    public function optionsMenuEnabled()
    {
        return $this->parentItems()->where('enabled', 1)
            ->orderby('parent_id')
            ->orderby('order')
            ->orderby('name')
            ->get();
    }

    /**
     * Render current menu items
     *
     * @param   string  $parentTag
     * @param   string  $childTag
     * @param   string  $parentClass
     * @param   string  $childClass
     *
     * @return  string
     */
    public function render($parentTag = null, $childTag = null, $parentClass = null, $childClass = null)
    {
        $this->defaultParentTag = ($parentTag !== null) ? $parentTag : $this->defaultParentTag;
        $this->defaultChildTag = ($childTag !== null) ? $childTag : $this->defaultChildTag;
        $this->parentClass = $parentClass;
        $this->childClass = $childClass;

        $content = $this->renderItem($this->optionsMenuEnabled());

        return $this->parentHtmlBuilder($content);
    }

    /**
     * Render html for each item
     *
     * @param   collection  $items
     *
     * @return  string
     */
    private function renderItem($items)
    {
        $menu = '';

        foreach ($items as $item) {
            $content = $item->html();
            $menu .= $this->buildTag($this->defaultChildTag, $this->childClass) . $content;

            if ($item->children()->count() > 0) {
                $childrenContent = $this->renderItem($item->children);

                $menu .= $this->buildTag($this->defaultParentTag)
                    . $childrenContent
                    . $this->closeTag($this->defaultParentTag);
            }

            $menu .= $this->closeTag($this->defaultChildTag);
        }

        return $menu;
    }

    /**
     * Generate htaml tags for parents
     *
     * @param   string  $content
     *
     * @return  string
     */
    private function parentHtmlBuilder($content)
    {
        $start = "<{$this->defaultParentTag}>";
        $end = "</{$this->defaultParentTag}>";

        return $this->buildTag($this->defaultParentTag, $this->parentClass)
            . $content
            . $this->closeTag($this->defaultParentTag);
    }

    /**
     * Create html open tag for given tag
     *
     * @param   string  $tag
     * @param   string | null  $class
     *
     * @return  string
     */
    private function buildTag($tag, $class = null)
    {
        if ($class === null) {
            return "<{$tag}>";
        }

        return "<{$tag} class='{$class}'>";
    }

    /**
     * Close html tag
     *
     * @param   string  $tag
     *
     * @return  string
     */
    private function closeTag($tag)
    {
        return "</{$tag}>";
    }
}
