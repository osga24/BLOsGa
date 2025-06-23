#!/bin/bash

for i in $(seq 1 50); do
	filename="test${i}.md"
	cat <<EOF >"$filename"
---
title: 'Test ${i}'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 15 2022'
heroImage: '../../assets/blog-placeholder-4.jpg'
---
EOF
done
