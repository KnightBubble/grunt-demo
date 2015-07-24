#!/bin/bash
LOCAL_PATH=`pwd`
echo $LOCAL_PATH
if [ -z 'node_modules' ]; then
   echo '**************install ***************'
   npm intall
else
   echo '******************already install if you update please npm install*******************'
   grunt release
fi
