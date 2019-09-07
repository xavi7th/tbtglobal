<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSlidersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sliders', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->string('img');
			$table->string('small_title')->nullable();
			$table->string('big_title')->nullable();
			$table->string('desc')->nullable();
			$table->enum('position', ['left', 'right', 'center'])->nullable();

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('sliders');
	}
}
