<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    /**
     * Display the home page view.
     */
    public function home(): Response
    {
        return Inertia::render('Landing/Index');
    }

    /**
     * Display the home page view.
     */
    public function about(): Response
    {
        return Inertia::render('Landing/About');
    }

}
