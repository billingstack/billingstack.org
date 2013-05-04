<?php

$lists = array();

foreach (glob('/var/spool/mail/billingstack.org*/control/listaddress') as $fn) {
    $name = file_get_contents($fn);
    $lists[] = array(name => $name);
}

echo json_encode($lists)
?>
