#!/usr/bin/perl
@lines = `perldoc -u -f atan2`;
foreach (@lines) {
    #Transforms anything in <> to uppercase without <>
    s/\w<([^>]+)>/\U$1/g;
    print;
}
