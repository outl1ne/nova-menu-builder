<?php

namespace Marshmallow\MenuBuilder\Http\Middleware;

use Marshmallow\MenuBuilder\MenuBuilder;

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
        return resolve(MenuBuilder::class)->authorize($request) ? $next($request) : abort(403);
    }
}
