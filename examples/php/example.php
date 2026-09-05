<?php
/**
 * RBLXValue API v2 — PHP example.
 * Usage: RBLXVALUE_API_KEY=... php example.php corrupt
 */
$API_KEY = getenv('RBLXVALUE_API_KEY') ?: '';
const BASE = 'https://api.rblxvalue.com/v2';

function api(string $path): array {
    global $API_KEY;
    $ch = curl_init(BASE . $path);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER     => ['X-Api-Key: ' . $API_KEY],
        CURLOPT_TIMEOUT        => 5,
    ]);
    $out = json_decode(curl_exec($ch), true);
    curl_close($ch);
    return is_array($out) ? $out : [];
}

$ident = $argv[1] ?? 'corrupt';
$data  = api('/items/' . urlencode($ident));

if (!empty($data['error'])) {
    fwrite(STDERR, 'Error: ' . $data['message'] . PHP_EOL);
    exit(1);
}

$i = $data['item'];
printf("%s (%s)\n", $i['name'], $i['category']);
printf("  Value:     %s\n", number_format($i['value']));
printf("  MM2Values: %d · Supreme: %d\n", $i['value_source_a'], $i['value_source_b']);
printf("  Demand:    %s/10 · Stability: %s\n", $i['demand'], $i['stability']);
printf("  Updated:   %s\n", $i['last_updated']);
