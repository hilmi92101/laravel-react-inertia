<?php

//use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Landing\PagesController as LandingPagesController;
use App\Http\Controllers\BasicReact\PagesController as BasicReactPagesController;
use App\Http\Controllers\TailwindCSS\PagesController as TailwindCSSPagesController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LandingPagesController::class, 'home'])->name('landing.home');
Route::get('/about', [LandingPagesController::class, 'about'])->name('landing.about');

Route::prefix('basic-react')->group(function () {
    Route::get('/', [BasicReactPagesController::class, 'index'])->name('basic-react.index');
    Route::get('/functional-component', [BasicReactPagesController::class, 'functionalComponent'])->name('basic-react.functional-component');
    Route::get('/class-component', [BasicReactPagesController::class, 'classComponent'])->name('basic-react.class-component');
    Route::get('/children-props-component', [BasicReactPagesController::class, 'childrenPropsComponent'])->name('basic-react.children-props-component');
    Route::get('/use-state-component', [BasicReactPagesController::class, 'useStateComponent'])->name('basic-react.use-state-component');
});

Route::prefix('tailwindcss-components')->group(function () {
    Route::get('/index', [TailwindCSSPagesController::class, 'index'])->name('tailwindcss-components.index');
    Route::get('/card-3', [TailwindCSSPagesController::class, 'index'])->name('tailwindcss-components.card-3');
});


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
