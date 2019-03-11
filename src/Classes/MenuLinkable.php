<?php

namespace OptimistDigital\MenuBuilder\Classes;

class MenuLinkable
{
    /**
     * Get menu link name shown in CMS when selecting link type.
     *
     * @return string
     **/
    public function menuLinkName(): string
    {
        throw new \Exception('[MenuLinkable] Must implement function [menuLinkName(): string].');
        return '';
    }

    /**
     * Get menu link type.
     *
     * @return string select|static-url
     **/
    public function menuLinkType(): string
    {
        return 'select';
    }

    /**
     * Get list of options shown in a select dropdown.
     * 
     * Should be a map of [key => value, ...], where key is a unique identifier
     * and value is the displayed string.
     *
     * @return array
     **/
    public function menuLinkOptions(): array
    {
        throw new \Exception('[MenuLinkable] Must implement function [menuLinkOptions(): string].');
        return [];
    }

    /**
     * Get subtitle shown in CMS menu items list.
     *
     * @param string $value
     * @return string
     **/
    public static function menuLinkSubtitleDisplayValue(string $value): string
    {
        return $value;
    }

    /**
     * Get the value of the link visible to the front-end.
     * 
     * Can be anything. It is up to you how you will handle parsing it.
     *
     * @param string $value The key from options list that was selected.
     * @return any
     **/
    public function menuLinkValue(string $value)
    {
        throw new \Exception('[MenuLinkable] Must implement function [menuLinkValue()].');
        return [];
    }
}
