#!/usr/bin/perl

chomp($radius = <STDIN>);
if ($radius < 0) {
  print "0\n";
} else {
  print $radius * (2 * 3.14592654) . "\n";
}
