<?php

namespace Outl1ne\MenuBuilder\Traits;

trait Menuable
{
    protected string $title = '';
    protected string $icon = 'adjustments';
    protected bool $hideMenu = false;

    public function title(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function hideMenu(bool $hide = true): self
    {
        $this->hideMenu = $hide;

        return $this;
    }
}
