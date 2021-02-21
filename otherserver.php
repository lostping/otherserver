<?php

/**
 * Extends Loginmask to enter the server url freely
 * Only use this if you enabled an array of predefined hosts,
 * but still want to enter another mail host yourself on the fly,
 * and don't want to add it to your default host list
 */
class otherserver extends rcube_plugin
{
  public $task = 'login';

  function init()
  {
    $this->include_script('otherserver.js');
  }
}

