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

    /**
     * Display the functional component page view.
     */
    public function functionalComponent(): Response
    {
        return Inertia::render('BasicReact/FunctionalComponent');
    }

    /**
     * Display the class component page view.
     */
    public function classComponent(): Response
    {
        return Inertia::render('BasicReact/ClassComponent');
    }

    /**
     * Display the children props component page view.
     */
    public function childrenPropsComponent(): Response
    {
        return Inertia::render('BasicReact/ChildrenPropsComponent');
    }
}
