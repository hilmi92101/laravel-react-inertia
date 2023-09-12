<?php

namespace App\Http\Controllers\BasicReact;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    /**
     * Display the index page view.
     */
    public function index(): Response
    {
        return Inertia::render('BasicReact/Index');
    }
}
