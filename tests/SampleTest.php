<?php

namespace OptimistDigital\MenuBuilder\Tests;


class SampleTest extends TestCase
{
    /** @test */
    public function it_succeeds()
    {
        $this->assertEquals(1, 1);
    }

    /** @test */
    public function it_shows_tables()
    {
        $tables = json_encode(\DB::select('show tables'));
        $this->assertEquals($tables, 'foo');
    }
}