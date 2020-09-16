<?php

namespace OptimistDigital\MenuBuilder\Commands;

use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class CreateMenuItemType extends Command
{
    /**
     * The filesystem instance.
     *
     * @var \Illuminate\Filesystem\Filesystem
     **/
    protected $files;
    protected $typeOptions = ['select', 'custom'];
    protected $signature = 'menubuilder:type {className?}';
    protected $description = 'Creates a new MenuItemType file with boilerplate.';
    protected $className;
    protected $type;
    protected $name;

    public function __construct(Filesystem $files)
    {
        parent::__construct();
        $this->files = $files;
    }

    public function handle()
    {
        $this->className = $this->getClassNameArgument();
        $this->type = $this->getTypeArgument();
        $this->name = $this->getNameArgument();
        $path = $this->getPath();
        $this->files->put($path, $this->buildClass());
        $this->info('Successfully created MenuItemType at ' . $path);
    }

    /**
     * Gets the class name argument - if missing, asks the user to enter it.
     *
     * @return string
     **/
    public function getClassNameArgument()
    {
        if (!$this->argument('className')) {
            return $this->ask('Please enter a name for the MenuItemType class');
        }
        return $this->argument('className');
    }

    /**
     * Gets the name argument - if missing, asks the user to enter it.
     *
     * @return string
     **/
    public function getNameArgument()
    {
        return $this->ask('Please enter a user-friendly name for the menu item type (ie "Product link")');
    }

    /**
     * Gets the name argument - if missing, asks the user to enter it.
     *
     * @return string
     **/
    public function getTypeArgument()
    {
        return $this->choice('Please choose a type for the Template', $this->typeOptions);
    }

    /**
     * Creates the directory for the template files and returns the file path.
     *
     * @return string
     **/
    protected function getPath()
    {
        return $this->makeDirectory(
            app_path('Nova/MenuBuilderTypes/' . $this->className . '.php')
        );
    }

    /**
     * Creates the directory for the template file.
     *
     * @param string $path Expected path of the Template file.
     * @return string
     **/
    protected function makeDirectory($path)
    {
        $directory = dirname($path);
        if (!$this->files->isDirectory($directory)) {
            $this->files->makeDirectory($directory, 0755, true, true);
        }
        return $path;
    }

    /**
     * Create the template file content.
     *
     * @return string
     */
    protected function buildClass()
    {
        $replace = [
            ':className' => $this->className,
            ':name' => $this->name,
            ':identifier' => Str::kebab($this->name),
        ];

        $templateFilePath = ($this->type === 'select')
            ? __DIR__ . '/../../stubs/MenuItemSelectType.php'
            : __DIR__ . '/../../stubs/MenuItemCustomType.php';

        $template = $this->files->get($templateFilePath);

        foreach ($replace as $key => $value) {
            $template = str_replace($key, $value, $template);
        }

        return $template;
    }
}
