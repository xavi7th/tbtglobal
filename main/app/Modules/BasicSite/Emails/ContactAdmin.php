<?php

namespace App\Modules\BasicSite\Emails;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactAdmin extends Mailable
{
	use Queueable, SerializesModels;
	public $email;
	public $msg;
	public $name;

	/**
	 * Create a new message instance.
	 *
	 * @return void
	 */
	public function __construct(Request $request)
	{
		$this->name = $request->name;
		$this->email = $request->email;
		$this->msg = $request->message;
	}

	/**
	 * Build the message.
	 *
	 * @return $this
	 */
	public function build()
	{
		// dd($this->message);
		return $this->from(config('app.email'))
			->view('basicsite::emails.new-contact');
	}
}
