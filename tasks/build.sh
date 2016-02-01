#!/usr/bin/env bash

out_dir="dist"

if [ ! -e $out_dir ]
then
	mkdir $out_dir
else
	rm -rf $out_dir/*
fi

cp index.html $out_dir
uglifyjs index.js > $out_dir/index.min.js
echo "Minified to $out_dir/index.min.js, but going to inject into index.html..."

sed "s/jwscripthook/$(cat $out_dir/index.min.js)/g" index.html > $out_dir/index.html