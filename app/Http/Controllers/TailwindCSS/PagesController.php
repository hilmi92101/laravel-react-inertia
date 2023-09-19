<?php

namespace App\Http\Controllers\TailwindCSS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    /**
     * Display the index page for tailwind css components.
     */
    public function index(): Response
    {
        return Inertia::render('TailwindCss/Index');
    }
}
