<?php

namespace OptimistDigital\MenuBuilder\Classes;

class MenuLinkable
{
    public function canBeUsedAsMenuLink()
    {
        return true;
    }

    // Shown in CMS
    public function menuLinkName(): string
    {
        throw new \Exception('[MenuLinkable] Must implement function [menuLinkName(): string].');
        return '';
    }

    // Used in CMS
    public function menuLinkType(): string
    {
        throw new \Exception('[MenuLinkable] Must implement function [menuLinkType(): string].');
        return '';
    }

    // Shown in CMS
    public function menuLinkOptions(): array
    {
        throw new \Exception('[MenuLinkable] Must implement function [menuLinkOptions(): string].');
        return [];
    }
}
