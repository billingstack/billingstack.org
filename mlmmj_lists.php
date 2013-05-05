<?php

$lists = array();

foreach (glob('/var/spool/mail/billingstack.org*/control/listaddress') as $fn) {
    $name = rtrim(file_get_contents($fn));
    array_push($lists, $name);
}

echo json_encode($lists)
?>
