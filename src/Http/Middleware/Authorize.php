<?php

namespace Workup\MenuBuilder\Http\Middleware;

use Workup\MenuBuilder\MenuBuilderTool;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        return resolve(MenuBuilderTool::class)->authorize($request) ? $next($request) : abort(403);
    }
}
