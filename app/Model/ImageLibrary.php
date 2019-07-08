<?php
/**
* @package App/Model
*
* @class ImageLibrary
*
* @author Kandarp Pandya <kandarp.d9ithub@gmail.com>
*
* @copyright 2019 D9ithub Software Solutions All rights reserved.
*/
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ImageLibrary extends Model
{
    protected $fillable = ['user_id', 'path', 'type'];
}
