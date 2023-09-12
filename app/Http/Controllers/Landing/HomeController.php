<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the home page view.
     */
    public function page(): Response
    {
        return Inertia::render('Landing/Home');
    }

    /**
     * Display the home page view.
     */
    public function about(): Response
    {
        return Inertia::render('Landing/About');
    }

}
