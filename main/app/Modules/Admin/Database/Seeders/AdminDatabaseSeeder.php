<?php

namespace App\Modules\Admin\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class AdminDatabaseSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		// $this->call("OthersTableSeeder");
		$this->call(UsersTableSeeder::class);
		$this->call(ClientsTableSeeder::class);
		$this->call(ProjectsTableSeeder::class);
		$this->call(SlidersTableSeeder::class);
	}
}
class ClientsTableSeeder extends Seeder
{

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{


		\DB::table('clients')->delete();

		\DB::table('clients')->insert(array(
			0 =>
			array(
				'name' => 'Chevron',
				'img' => '/storage/clients/1565936130.png',
			),
			1 =>
			array(
				'name' => 'Shell',
				'img' => '/storage/clients/1565936156.png',
			),
			2 =>
			array(
				'name' => 'NECONDE',
				'img' => '/storage/clients/1568202311.png',
			),
			3 =>
			array(
				'name' => 'NPDC',
				'img' => '/storage/clients/1568202404.png',
			),
			4 =>
			array(
				'name' => 'SEPLAT',
				'img' => '/storage/clients/1568202451.png',
			),
			5 =>
			array(
				'name' => 'BOLLORE',
				'img' => '/storage/clients/1568215246.png',
			),
		));
	}
}
class ProjectsTableSeeder extends Seeder
{

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{


		\DB::table('projects')->delete();

		\DB::table('projects')->insert(array(
			0 =>
			array(
				'img' => '/storage/projects/1567469352.png',
				'date' => '2019-09-03 01:09:13',
				'location' => 'Warri, Delta State',
				'name' => 'The First Sample Project',
				'desc' => 'This is a sample project created from the admin end. Testing all is working as expected. This project can be deleted from the admin section and others created in its place.',
			),
			1 =>
			array(
				'img' => '/storage/projects/1567575933.png',
				'date' => '2019-09-04 06:45:33',
				'location' => 'Delta State',
				'name' => 'COMPLETED INSULATION WORK AT SPDC',
				'desc' => 'This in one of many project handled and completed by TBT Global within the frame time specified for the job.',
			),
			2 =>
			array(
				'img' => '/storage/projects/1567576467.png',
				'date' => '2019-09-04 06:54:27',
				'location' => 'LAGOS',
				'name' => 'FORKLIFT OPERATION AT BOLLORE WAREHOUSE',
				'desc' => 'Off loading of goods',
			),
			3 =>
			array(
				'img' => '/storage/projects/1567576988.png',
				'date' => '2019-09-04 07:03:08',
				'location' => 'Ughelli, Delta State',
				'name' => 'PAINTING OF UGHELLI EAST FLOW STATION',
				'desc' => 'Surface painting of the Ughelli east flow station',
			),
			4 =>
			array(
				'img' => '/storage/projects/1567577827.png',
				'date' => '2019-09-04 07:17:07',
				'location' => 'Ughelli, Delta State',
				'name' => 'COMPLETED PAINTNG OF FLOW STATION',
				'desc' => 'The company completed the painting of the Ughelli East flow station within the time frame spitulated.',
			),
			5 =>
			array(
				'img' => '/storage/projects/1567580696.png',
				'date' => '2019-09-04 08:04:56',
				'location' => 'Warri, Delta State',
				'name' => 'PUMP HOUSE MAINTENANCE AND HOUSE KEEPING',
				'desc' => 'Cleaning and maintaining of pump house.',
			),
			6 =>
			array(
				'img' => '/storage/projects/1567581079.png',
				'date' => '2019-09-04 08:11:19',
				'location' => 'NGC',
				'name' => 'BLASTING AND WRAPPING OF WELDED JOINT',
				'desc' => 'TBT Global working in progress at NGC',
			),
			7 =>
			array(
				'img' => '/storage/projects/1568104987.png',
				'date' => '2019-09-10 09:43:07',
				'location' => 'Warri',
				'name' => 'Project Supervision',
				'desc' => NULL,
			),
			8 =>
			array(
				'img' => '/storage/projects/1568105212.png',
				'date' => '2019-09-10 09:46:52',
				'location' => 'Delta State',
				'name' => 'Assembling ot project equipments',
				'desc' => NULL,
			),
		));
	}
}
class SlidersTableSeeder extends Seeder
{

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{


		\DB::table('sliders')->delete();

		\DB::table('sliders')->insert(array(
			0 =>
			array(
				'img' => '/storage/projects/1565935497.png',
				'small_title' => 'udnehvelipfi',
				'big_title' => 'ihousmevulvu',
				'desc' => 'ujluamueneuj',
				'position' => 'right',
			),
			1 =>
			array(
				'img' => '/storage/projects/1565935869.png',
				'small_title' => 'azasebatdumk',
				'big_title' => 'vegervupevum',
				'desc' => 'ninwebbizube',
				'position' => 'left',
			),
			2 =>
			array(
				'img' => '/storage/projects/1565935904.png',
				'small_title' => 'hgnfh',
				'big_title' => 'hmgnhb',
				'desc' => 'hngfh',
				'position' => 'center',
			),
			3 =>
			array(
				'img' => '/storage/projects/1565935918.png',
				'small_title' => 'kuyjhg',
				'big_title' => 'khgnfv',
				'desc' => 'khtfg',
				'position' => 'left',
			),
			4 =>
			array(
				'img' => '/storage/projects/1565935934.png',
				'small_title' => 'jytrg',
				'big_title' => 'jtdngf',
				'desc' => 'jythdf',
				'position' => 'right',
			),
		));
	}
}
class UsersTableSeeder extends Seeder
{

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{


		\DB::table('users')->delete();

		\DB::table('users')->insert(array(
			0 =>
			array(
				'user_name' => 'anne',
				'password' => '$2y$10$SbyqlYpVM./.vbXo4juqFOVmuOGPdSKy8pcueD.0Ku2RVgAaoAqb.',
				'unenc_password' => 'pass',
				'remember_token' => 'eI8pXhlIS2D5NXIw1kWJbS2D7twxRZECoj1jNEFEXQHUace5YpudMGAZiNeV',
			),
			1 =>
			array(
				'user_name' => 'jstoltenberg',
				'password' => '$2y$10$4quyBO2DL7MRVJvVRFmin.CWUOLBEYP27ZiSU80ZAN6lVgKndDkyy',
				'unenc_password' => 'pass',
				'remember_token' => 'r8202tgHrt',
			),
		));
	}
}
