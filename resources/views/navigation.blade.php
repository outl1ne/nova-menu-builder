@if (OptimistDigital\MenuBuilder\MenuBuilder::getMenuResource()::authorizedToViewAny(request()))
    <router-link tag="h3" :to="{ name: 'menus' }"
        class="cursor-pointer flex items-center font-normal dim text-white mb-6 text-base no-underline">
        <svg class="sidebar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path fill="var(--sidebar-icon)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span class="sidebar-label">
            {{ trans('nova-menu-builder::navigation.sidebar') }}
        </span>
    </router-link>
@endif
