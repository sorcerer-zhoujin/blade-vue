<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SampleController extends Controller {
  public function index() {
    return new Response(["message" => "sample message"]);
  }
}
