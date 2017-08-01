;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.453 800.653l0.105-0.223-197.89-193.493c38.961-45.944 61.363-103.043 63.198-161.203 3.664-70.834-24.038-144.003-74.073-195.682-42.739-45.105-102.838-75.421-164.821-83.209-12.031-1.639-24.352-2.458-36.625-2.458-61.344 0-121.126 19.942-168.322 56.113-54.705 40.781-92.468 101.996-103.616 167.925-11.054 61.446 0.911 127.372 32.811 180.82 21.819 37.152 52.888 69.073 89.828 92.298 33.909 21.453 72.924 35.474 112.775 40.485 11.958 1.62 24.219 2.439 36.445 2.439 56.586 0 112.572-17.3 158.132-48.773l197.642 193.343 3.655 3.368 0.105-0.091c6.515 5.235 14.768 8.14 23.319 8.14 20.202 0 36.637-16.127 36.637-35.947 0-8.787-3.358-17.279-9.308-23.853M649.856 536.743c-32.378 64.734-97.46 112.073-169.899 123.548-33.909 5.773-69.646 3.986-102.941-5.139-64.972-17.433-120.583-63.58-148.808-123.528-32.677-66.559-28.602-150.391 10.387-213.6 34.702-58.404 95.873-99.427 163.56-109.707l4.802-0.71c2.525-0.409 5.069-0.799 7.555-1.082 8.369-0.858 16.882-1.286 25.282-1.286 34.569 0 68.716 7.283 98.811 21.085 55.059 24.691 98.955 70.579 120.409 125.929 23.529 59.109 20.125 128.061-9.157 184.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiao3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M437.248 452.928 84.416 452.928C73.088 452.928 64 443.776 64 432.512L64 85.056C64 73.792 73.088 64.64 84.416 64.64l352.832 0c11.264 0 20.416 9.216 20.416 20.416l0 347.456C457.664 443.776 448.512 452.928 437.248 452.928zM104.896 412.032l311.936 0L416.832 105.6 104.896 105.6 104.896 412.032z"  ></path>' +
    '' +
    '<path d="M437.248 927.04 84.416 927.04C73.088 927.04 64 917.888 64 906.624L64 559.36c0-11.392 9.088-20.48 20.416-20.48l352.832 0c11.264 0 20.416 9.152 20.416 20.48l0 347.264C457.664 917.888 448.512 927.04 437.248 927.04zM104.896 886.144l311.936 0L416.832 579.904 104.896 579.904 104.896 886.144z"  ></path>' +
    '' +
    '<path d="M905.088 452.928 552.32 452.928c-11.392 0-20.48-9.216-20.48-20.416L531.84 85.056c0-11.264 9.152-20.416 20.48-20.416l352.768 0c11.328 0 20.416 9.216 20.416 20.416l0 347.456C925.504 443.776 916.352 452.928 905.088 452.928zM572.736 412.032l311.808 0L884.544 105.6 572.736 105.6 572.736 412.032z"  ></path>' +
    '' +
    '<path d="M716.928 929.472c-112.512 0-204.032-91.584-204.032-203.904 0-112.64 91.52-204.032 204.032-204.032 112.384 0 203.904 91.456 203.904 204.032C920.832 837.952 829.312 929.472 716.928 929.472zM716.928 562.496c-89.984 0-163.072 73.28-163.072 163.136 0 89.6 73.088 162.88 163.072 162.88 89.728 0 162.944-73.28 162.944-162.88C879.872 635.776 806.656 562.496 716.928 562.496z"  ></path>' +
    '' +
    '<path d="M939.456 959.36c-4.864 0-9.984-1.728-14.08-5.504l-90.752-85.952c-8.192-7.68-8.576-20.8-0.896-28.864 7.872-8.32 20.864-8.704 28.928-0.832l90.88 85.76c8.256 7.872 8.576 20.928 0.896 29.12C950.464 957.248 945.088 959.36 939.456 959.36z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M713.874777 507.329631c-0.067538-13.537318-0.153496-33.31271-0.153496-46.242184L713.721281 255.824503c0-53.692876-21.041222-104.303554-59.246359-142.509714-38.207184-38.20616-88.817861-59.247382-142.526087-59.247382-53.688783 0-104.295368 21.040199-142.499481 59.243289-38.20309 38.20309-59.243289 88.810698-59.243289 142.499481l0 205.278293c0 12.857842-0.156566 32.206516-0.287549 46.133713-44.944632 49.900503-69.536726 113.774253-69.536726 181.434236 0 72.511477 28.237111 140.683113 79.510892 191.956893s119.445416 79.510892 191.956893 79.510892 140.683113-28.238135 191.95587-79.510892 79.510892-119.445416 79.510892-191.956893C783.316336 621.044532 758.756987 557.213761 713.874777 507.329631zM354.208231 255.810177c0-86.977957 70.761624-157.739581 157.755953-157.739581 86.986143 0 157.75493 70.768787 157.75493 157.75493l0 205.262944c0 2.067079 0.002047 4.311189 0.00614 6.671956-45.74588-32.843012-100.444667-50.571792-157.87568-50.571792-57.33687 0-111.950721 17.670451-157.651576 50.409087 0.007163-2.297322 0.011256-4.483104 0.011256-6.509251L354.209254 255.810177zM511.848551 916.121014c-125.424594 0-227.465618-102.041024-227.465618-227.465618s102.041024-227.465618 227.465618-227.465618c125.423571 0 227.464595 102.040001 227.464595 227.465618S637.273145 916.121014 511.848551 916.121014z"  ></path>' +
    '' +
    '<path d="M492.569462 673.804153l46.337351 0 0 158.705582-46.337351 0 0-158.705582Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-renwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M794.553344 834.477056c-169.280512 0-338.56 0-507.840512 0-0.749568-0.320512-1.471488-0.781312-2.253824-0.940032-24.943616-5.065728-40.7808-20.17792-48.602112-44.087296-0.987136-3.016704-1.599488-6.155264-2.384896-9.237504 0-27.644928 0-55.288832 0-82.93376 0.718848-1.501184 1.528832-2.965504 2.142208-4.507648 31.939584-80.30208 86.001664-140.440576 163.473408-179.171328 8.30464-4.151296 16.93696-7.647232 25.775104-11.60704-4.265984-3.933184-8.573952-7.527424-12.45184-11.538432-47.255552-48.87552-66.117632-107.165696-51.5328-173.469696 16.41984-74.64448 63.290368-122.554368 137.393152-142.844928 9.448448-2.586624 19.356672-3.492864 29.051904-5.177344 8.873984 0 17.746944 0 26.620928 0 1.309696 0.3072 2.609152 0.668672 3.930112 0.912384 10.523648 1.94048 21.284864 3.026944 31.540224 5.912576 85.977088 24.192 142.623744 106.863616 134.734848 195.975168-4.440064 50.151424-25.515008 91.931648-62.788608 125.645824-1.680384 1.519616-3.359744 3.039232-5.307392 4.800512 1.637376 0.7168 2.563072 1.140736 3.50208 1.53088 83.301376 34.629632 143.270912 93.263872 180.38784 175.387648 2.714624 6.006784 5.238784 12.09856 7.851008 18.151424 0 27.644928 0 55.288832 0 82.93376-0.310272 0.760832-0.776192 1.49504-0.909312 2.284544-2.809856 16.700416-11.19744 29.94688-24.572928 40.218624C814.053376 829.058048 804.356096 831.854592 794.553344 834.477056zM540.602368 792.81664c10.405888 0 20.811776 0 31.217664 0 70.28224 0 140.56448 0.008192 210.84672-0.006144 16.417792-0.003072 24.18176-7.74656 24.185856-24.015872 0.00512-19.446784 0.032768-38.893568-0.043008-58.340352-0.008192-2.158592-0.186368-4.50048-1.014784-6.447104-37.4784-88.13056-101.897216-145.994752-194.171904-172.389376-2.369536-0.677888-5.399552-0.384-7.763968 0.459776-41.854976 14.942208-83.675136 14.980096-125.622272 0.355328-2.950144-1.02912-6.714368-1.308672-9.683968-0.467968-91.722752 25.991168-155.429888 83.672064-192.759808 171.009024-0.780288 1.824768-1.313792 3.915776-1.321984 5.885952-0.091136 21.152768-0.129024 42.305536-0.011264 63.458304 0.04096 7.300096 2.996224 13.723648 9.50784 16.98816 4.486144 2.249728 10.015744 3.357696 15.082496 3.369984C379.568128 792.875008 460.085248 792.81664 540.602368 792.81664zM540.38528 210.710528c-78.993408 0.19968-143.292416 65.427456-143.107072 145.17248 0.188416 80.770048 64.397312 145.979392 143.604736 145.844224 78.964736-0.135168 143.20128-65.595392 143.105024-145.830912C683.892736 275.636224 619.478016 210.510848 540.38528 210.710528z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M731.953236 64.710879l-444.323065 0c-25.000419 0-58.509637 20.239994-58.509637 45.216876l0 804.100488c0 25.022931 33.510242 45.261902 58.509637 45.261902l444.323065 0c25.000419 0 62.926231-20.23897 62.926231-45.261902L794.879467 109.927755C794.879467 84.949849 756.953654 64.710879 731.953236 64.710879zM746.742072 900.68841c0 6.532793-5.313011 11.868317-11.844781 11.868317l-447.680536 0c-6.53177 0-11.821245-5.335524-11.821245-11.868317L275.395509 768.580471l471.346562 0L746.742072 900.68841zM746.742072 724.422718l-471.346562 0 0-473.095394 471.346562 0L746.742072 724.422718zM746.742072 206.156496l-471.346562 0 0-73.322009c0-6.53177 5.311988-23.505367 11.821245-23.505367l447.680536 0c6.53177 0 11.844781 5.335524 11.844781 11.867294L746.742072 206.156496zM556.9984 816.41906l-93.813736 0 0 45.677364 93.813736 0L556.9984 816.41906z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path>' +
    '' +
    '<path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path>' +
    '' +
    '<path d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z"  ></path>' +
    '' +
    '<path d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuchetianjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M803.2 896m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z"  ></path>' +
    '' +
    '<path d="M345.6 896m-64 0a2 2 0 1 0 128 0 2 2 0 1 0-128 0Z"  ></path>' +
    '' +
    '<path d="M774.4 118.4c-108.8 0-198.4 89.6-198.4 198.4 0 108.8 89.6 198.4 198.4 198.4 108.8 0 198.4-89.6 198.4-198.4C976 208 886.4 118.4 774.4 118.4zM774.4 464c-83.2 0-150.4-67.2-150.4-147.2 0-83.2 67.2-147.2 150.4-147.2 83.2 0 150.4 67.2 150.4 147.2C924.8 400 857.6 464 774.4 464z"  ></path>' +
    '' +
    '<path d="M368 649.6c0 12.8 12.8 22.4 25.6 22.4l492.8-41.6c12.8 0 22.4-12.8 22.4-25.6 0-12.8-12.8-22.4-25.6-22.4l-492.8 41.6C377.6 624 364.8 633.6 368 649.6z"  ></path>' +
    '' +
    '<path d="M844.8 291.2l-48 0 0-48c0-12.8-9.6-25.6-25.6-25.6s-25.6 9.6-25.6 25.6l0 48-48 0c-12.8 0-25.6 9.6-25.6 25.6 0 12.8 9.6 25.6 25.6 25.6l48 0 0 48c0 12.8 9.6 25.6 25.6 25.6s25.6-9.6 25.6-25.6l0-48 48 0c12.8 0 25.6-9.6 25.6-25.6C867.2 304 857.6 291.2 844.8 291.2z"  ></path>' +
    '' +
    '<path d="M329.6 192l188.8 0c12.8 0 25.6-9.6 25.6-25.6 0-12.8-9.6-25.6-25.6-25.6l-188.8 0c-12.8 0-25.6 9.6-25.6 25.6C304 182.4 316.8 192 329.6 192z"  ></path>' +
    '' +
    '<path d="M886.4 742.4l-524.8 0c-28.8 0-57.6-25.6-64-51.2l-92.8-547.2c-9.6-51.2-57.6-92.8-112-92.8l-22.4 0c-12.8 0-25.6 9.6-25.6 25.6 0 12.8 9.6 25.6 25.6 25.6l22.4 0c28.8 0 57.6 22.4 64 51.2l92.8 547.2c9.6 51.2 57.6 92.8 112 92.8l524.8 0c12.8 0 25.6-9.6 25.6-25.6C912 755.2 899.2 742.4 886.4 742.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 697.6c102.4 0 182.4-83.2 182.4-185.6 0-102.4-83.2-185.6-182.4-185.6-102.4 0-182.4 83.2-182.4 185.6C329.6 614.4 412.8 697.6 512 697.6L512 697.6zM512 646.4c-73.6 0-134.4-60.8-134.4-134.4 0-73.6 60.8-134.4 134.4-134.4 73.6 0 134.4 60.8 134.4 134.4C646.4 585.6 585.6 646.4 512 646.4L512 646.4z"  ></path>' +
    '' +
    '<path d="M249.015232 843.178592c35.2 28.8 73.6 51.2 112 67.2 41.6-38.4 96-60.8 150.4-60.8 57.6 0 108.8 22.4 150.4 60.8 41.6-16 80-38.4 112-67.2-12.8-54.4-3.2-112 22.4-163.2 28.8-48 73.6-86.4 128-102.4 3.2-22.4 6.4-44.8 6.4-67.2 0-22.4-3.2-44.8-6.4-67.2-54.4-16-99.2-54.4-128-102.4-28.8-48-35.2-108.8-22.4-163.2-35.2-28.8-73.6-51.2-112-67.2-41.6 38.4-92.8 60.8-150.4 60.8-54.4 0-108.8-22.4-150.4-60.8-41.6 16-80 38.4-112 67.2 12.8 54.4 3.2 112-22.4 163.2-28.8 48-73.6 86.4-128 102.4-3.2 22.4-6.4 44.8-6.4 67.2 0 22.4 3.2 44.8 6.4 67.2 54.4 16 99.2 54.4 128 102.4C252.215232 731.178592 261.815232 788.778592 249.015232 843.178592M361.015232 958.378592c-54.4-19.2-105.6-48-150.4-89.6-6.4-6.4-9.6-16-6.4-22.4 16-48 9.6-99.2-16-140.8-25.6-44.8-64-73.6-112-83.2-9.6-3.2-16-9.6-16-19.2-6.4-28.8-9.6-60.8-9.6-89.6 0-28.8 3.2-57.6 9.6-89.6 3.2-9.6 9.6-16 16-19.2 48-12.8 89.6-41.6 112-83.2 25.6-44.8 28.8-92.8 16-140.8-3.2-9.6 0-19.2 6.4-22.4 44.8-38.4 96-67.2 150.4-89.6 9.6-3.2 16 0 22.4 6.4 35.2 35.2 80 57.6 128 57.6 48 0 96-19.2 128-57.6 6.4-6.4 16-9.6 22.4-6.4 54.4 19.2 105.6 48 150.4 89.6 6.4 6.4 9.6 16 6.4 22.4-16 48-9.6 99.2 16 140.8 25.6 44.8 64 73.6 112 83.2 9.6 3.2 16 9.6 16 19.2 6.4 28.8 9.6 60.8 9.6 89.6 0 28.8-3.2 57.6-9.6 89.6-3.2 9.6-9.6 16-16 19.2-48 12.8-89.6 41.6-112 83.2-25.6 44.8-28.8 92.8-16 140.8 3.2 9.6 0 19.2-6.4 22.4-44.8 38.4-96 67.2-150.4 89.6-9.6 3.2-16 0-22.4-6.4-35.2-35.2-80-57.6-128-57.6-48 0-96 19.2-128 57.6-3.2 3.2-9.6 6.4-16 6.4C364.215232 958.378592 361.015232 958.378592 361.015232 958.378592z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxizhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M585.6 905.6 585.6 905.6c25.6-32 38.4-44.8 41.6-44.8 208-38.4 345.6-198.4 345.6-396.8 3.2-227.2-204.8-406.4-460.8-406.4s-464 179.2-464 406.4c0 198.4 140.8 358.4 345.6 396.8 3.2 0 16 12.8 41.6 44.8l0 0c32 41.6 51.2 64 73.6 64S550.4 947.2 585.6 905.6M620.8 803.2c-19.2 3.2-32 19.2-67.2 64l0 0c-22.4 25.6-41.6 44.8-41.6 44.8l-9.6-9.6c-6.4-6.4-16-19.2-25.6-32-38.4-48-51.2-64-70.4-67.2-185.6-32-307.2-172.8-307.2-345.6 0-192 185.6-352 416-352s416 160 416 352C928 633.6 806.4 771.2 620.8 803.2z"  ></path>' +
    '' +
    '<path d="M281.6 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path>' +
    '' +
    '<path d="M467.2 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path>' +
    '' +
    '<path d="M652.8 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lingcunwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M931.2 467.2c-12.8 0-22.4 9.6-22.4 22.4l0 329.6c0 22.4-19.2 41.6-41.6 41.6l-732.8 0c-22.4 0-41.6-19.2-41.6-41.6l0-563.2c0-22.4 19.2-41.6 41.6-41.6l294.4 0c12.8 0 22.4-9.6 22.4-22.4 0-12.8-9.6-22.4-22.4-22.4l-294.4 0c-48 0-89.6 38.4-89.6 89.6l0 563.2c0 48 38.4 89.6 89.6 89.6l732.8 0c48 0 89.6-38.4 89.6-89.6l0-329.6C956.8 480 947.2 467.2 931.2 467.2z"  ></path>' +
    '' +
    '<path d="M969.6 265.6l-96-108.8c-9.6-9.6-22.4-9.6-35.2-3.2-9.6 9.6-9.6 22.4-3.2 35.2l48 57.6c-67.2 0-147.2 16-224 51.2-134.4 64-227.2 185.6-259.2 371.2-3.2 12.8 6.4 25.6 19.2 28.8 12.8 3.2 25.6-6.4 28.8-19.2 28.8-169.6 112-278.4 230.4-336 44.8-22.4 96-35.2 147.2-41.6 25.6-3.2 51.2-6.4 73.6-3.2l-83.2 73.6c-9.6 9.6-9.6 22.4-3.2 35.2 9.6 9.6 22.4 9.6 35.2 3.2l115.2-99.2C979.2 291.2 979.2 275.2 969.6 265.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-new" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.6 272l-758.4 0c-41.6 0-73.6 32-73.6 73.6l0 361.6c0 41.6 32 73.6 73.6 73.6l758.4 0c41.6 0 73.6-32 73.6-73.6l0-361.6C963.2 304 931.2 272 889.6 272zM320 646.4l-51.2 0-99.2-195.2 0 195.2-32 0 0-233.6 44.8 0 102.4 201.6 3.2 0 0-201.6 32 0L320 646.4zM400 512l124.8 0 0 32-124.8 0c0 3.2 0 3.2 0 6.4l0 0c0 41.6 12.8 60.8 38.4 60.8l89.6 0 0 32-89.6 0c-19.2 0-35.2-6.4-48-22.4-12.8-16-19.2-41.6-19.2-70.4 0-12.8 0-28.8 0-54.4 0-54.4 35.2-76.8 70.4-83.2l0 0c12.8 0 80 0 86.4 0l0 32c-28.8 0-73.6 0-83.2 0-12.8 3.2-41.6 12.8-41.6 51.2C400 502.4 400 505.6 400 512zM816 646.4l-44.8 0-44.8-185.6-51.2 185.6-48 0-67.2-233.6 35.2 0 57.6 192 3.2 0 51.2-192 38.4 0 51.2 201.6 60.8-201.6 32 0L816 646.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ju" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M441.6 576l28.8 28.8 0-32C457.6 572.8 451.2 576 441.6 576z"  ></path>' +
    '' +
    '<path d="M316.8 425.6c41.6-3.2 80-6.4 118.4-6.4l0-19.2-118.4 0L316.8 425.6z"  ></path>' +
    '' +
    '<path d="M633.6 297.6c0 0 51.2 19.2 112 51.2 16-12.8 28.8-19.2 38.4-32s12.8-22.4 6.4-32c-6.4-12.8-22.4-16-48-19.2l-3.2 0c-96 0-153.6 41.6-156.8 41.6l-19.2-41.6-41.6 0 0 147.2 51.2 0 0 51.2c-16 0-35.2 0-51.2 3.2l0 35.2c38.4-6.4 73.6-12.8 105.6-16l-41.6-64c32-12.8 64-25.6 96-38.4-44.8-32-83.2-41.6-83.2-41.6L633.6 297.6z"  ></path>' +
    '' +
    '<path d="M787.2 51.2l-544 0c-102.4 0-185.6 83.2-185.6 185.6l0 540.8c0 105.6 83.2 188.8 185.6 188.8l540.8 0c102.4 0 185.6-83.2 185.6-185.6l0-544C972.8 134.4 889.6 51.2 787.2 51.2zM198.4 809.6c-6.4-16-25.6-41.6-25.6-41.6 169.6-28.8 243.2-115.2 243.2-115.2l51.2 54.4C406.4 764.8 243.2 809.6 198.4 809.6zM723.2 460.8c0 0 22.4 54.4 44.8 80-41.6 9.6-108.8 16-179.2 22.4 19.2 25.6 41.6 48 73.6 73.6 76.8-28.8 121.6-92.8 121.6-92.8l92.8 54.4c0 0-70.4 64-147.2 80 41.6 22.4 96 41.6 150.4 54.4 0 0-64 60.8-80 80-115.2-44.8-179.2-102.4-217.6-147.2l0 147.2-112 0 0-211.2c-64 57.6-227.2 105.6-272 105.6-6.4-16-25.6-41.6-25.6-41.6 105.6-16 176-57.6 211.2-86.4-83.2 6.4-144 9.6-144 9.6l-12.8-54.4c48 0 124.8-6.4 208-12.8L435.2 480c-156.8 12.8-240 41.6-240 41.6l-32-80c22.4-3.2 44.8-6.4 70.4-9.6l0-163.2-48 0 0-57.6 390.4 0 0 28.8c38.4-9.6 105.6-25.6 179.2-22.4 57.6 0 96 16 115.2 48 12.8 19.2 12.8 41.6-3.2 70.4-12.8 12.8-25.6 32-48 48 25.6 16 51.2 38.4 73.6 57.6-38.4 32-83.2 67.2-83.2 67.2-19.2-28.8-41.6-54.4-64-73.6-19.2 12.8-41.6 25.6-70.4 41.6C691.2 473.6 707.2 467.2 723.2 460.8z"  ></path>' +
    '' +
    '<path d="M316.8 336l118.4 0 0 28.8-118.4 0 0-28.8Z"  ></path>' +
    '' +
    '<path d="M316.8 272l118.4 0 0 25.6-118.4 0 0-25.6Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ju1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M70.4 832c0 0 22.4 35.2 32 57.6 57.6 0 265.6-60.8 339.2-131.2l-64-70.4C377.6 684.8 284.8 793.6 70.4 832z"  ></path>' +
    '' +
    '<path d="M950.4 614.4l-115.2-70.4c0 0-54.4 83.2-150.4 121.6-38.4-28.8-70.4-60.8-92.8-92.8 86.4-9.6 169.6-19.2 224-28.8-28.8-32-57.6-102.4-57.6-102.4-16 6.4-38.4 12.8-60.8 19.2 32-16 60.8-35.2 86.4-51.2 28.8 25.6 54.4 57.6 80 96 0 0 54.4-41.6 102.4-83.2-28.8-25.6-60.8-51.2-92.8-73.6 28.8-22.4 48-44.8 60.8-64 22.4-35.2 19.2-64 3.2-89.6-22.4-41.6-73.6-60.8-144-60.8-86.4 0-176 19.2-220.8 32L572.8 128l-489.6 0 0 73.6 57.6 0 0 204.8c-32 3.2-64 6.4-89.6 9.6l41.6 102.4c0 0 105.6-35.2 304-54.4l0 51.2c-99.2 12.8-195.2 19.2-259.2 19.2l16 70.4c0 0 76.8-3.2 179.2-9.6-48 35.2-131.2 86.4-265.6 108.8 0 0 22.4 35.2 32 57.6 57.6 0 265.6-60.8 339.2-131.2l-35.2-38.4c12.8 0 25.6-3.2 38.4-3.2l0 310.4 140.8 0 0-188.8c48 54.4 131.2 124.8 268.8 185.6 22.4-22.4 99.2-102.4 99.2-102.4-70.4-16-134.4-38.4-188.8-70.4C860.8 697.6 950.4 614.4 950.4 614.4zM396.8 390.4c-44.8 3.2-96 3.2-147.2 6.4l0-32 147.2 0L396.8 390.4zM396.8 320l-147.2 0 0-35.2 147.2 0L396.8 320zM396.8 233.6l-147.2 0 0-32 147.2 0L396.8 233.6zM505.6 499.2l0-44.8 0 0c22.4 0 41.6-3.2 64-3.2l0-67.2c0 0-25.6 0-64 0l0-185.6 54.4 0 25.6 51.2c0 0 73.6-54.4 195.2-54.4 0 0 3.2 0 3.2 0 32 3.2 54.4 9.6 64 25.6 6.4 9.6 3.2 25.6-6.4 38.4-9.6 12.8-25.6 25.6-48 38.4-76.8-41.6-140.8-67.2-140.8-67.2l-51.2 54.4c0 0 44.8 16 102.4 54.4-38.4 16-80 32-118.4 48l54.4 83.2C595.2 486.4 550.4 492.8 505.6 499.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huiyuanzhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M638.58093 264.524652c3.88754 0 7.049556 3.296069 7.049556 7.348362 0 3.577478-2.563382 6.684236-5.961782 7.226588l-3.65525 0.583285-2.517333-2.758834c-0.899486-0.985444-1.971911-2.662643-1.971911-5.052063C631.525234 267.820722 634.69032 264.524652 638.58093 264.524652M386.04738 264.524652c3.88754 0 7.049556 3.296069 7.049556 7.348362 0 2.38942-1.066285 4.057409-1.960655 5.03569l-2.535753 2.77316-3.64604-0.582261c-3.400446-0.543376-5.963829-3.650133-5.963829-7.226588C378.99066 267.820722 382.15677 264.524652 386.04738 264.524652M624.417349 313.074392l16.627702 101.19168 3.220345 19.597337 19.685341-2.629897 111.932302-14.951527-109.24817 255.432577c-50.268894-19.936051-102.4483-30.027897-155.401326-30.027897-70.708412 0-125.609813 17.952884-153.570631 29.478382L247.291153 416.044578l113.369024 15.187911 19.690458 2.638083 3.222391-19.603477 16.632819-101.18861 98.147344 91.565439 13.96199 13.025665 13.960966-13.026688L624.417349 313.074392M201.503317 380.692419c3.88754 0 7.05058 3.297093 7.05058 7.350408 0 0.346901-0.047072 0.795109-0.141216 1.333368l-0.38988 2.237971-1.542122 1.607614c-0.777713 0.810459-2.457981 2.169409-4.977361 2.169409-3.889587 0-7.05365-3.296069-7.05365-7.348362C194.449667 383.990534 197.61373 380.692419 201.503317 380.692419M818.267359 382.330732c3.88754 0 7.05058 3.296069 7.05058 7.348362 0 4.052293-3.163039 7.348362-7.05058 7.348362-2.074242 0-3.572362-0.913812-4.463662-1.680269l-2.093684-1.799996-0.387833-2.77316c-0.105401-0.757247-0.11154-1.044796-0.11154-1.094938C811.211662 385.627824 814.376749 382.330732 818.267359 382.330732M638.58093 244.058528c-15.20019 0-27.52182 12.45159-27.52182 27.814486 0 7.280824 2.793626 13.886265 7.318686 18.84623l-106.063641 98.959849-106.073874-98.959849c4.53427-4.958942 7.322779-11.564383 7.322779-18.84623 0-15.362896-12.32163-27.814486-27.51568-27.814486-15.20019 0-27.52182 12.45159-27.52182 27.814486 0 13.872962 10.061147 25.339108 23.202445 27.436886l-18.349927 111.63759-134.802172-18.059308c0.274246-1.576915 0.444115-3.189645 0.444115-4.845355 0-15.362896-12.319583-27.816532-27.51568-27.816532-15.20019 0-27.519774 12.453636-27.519774 27.816532 0 15.360849 12.319583 27.814486 27.519774 27.814486 7.749498 0 14.741749-3.252067 19.744693-8.466835L347.195513 698.511881c0 0 66.199725-36.360116 164.03803-36.360116 48.928363 0 105.755626 9.086959 166.199253 36.360116l123.026988-287.647279c4.799306 4.126994 11.007705 6.628978 17.808598 6.628978 15.195074 0 27.516704-12.453636 27.516704-27.814486 0-15.360849-12.32163-27.814486-27.516704-27.814486-15.20019 0-27.52182 12.453636-27.52182 27.814486 0 1.337461 0.128937 2.642177 0.308015 3.928472l-129.813554 17.339924L642.896212 299.3099c13.141298-2.098801 23.200398-13.563924 23.200398-27.436886C666.09661 256.510118 653.774981 244.058528 638.58093 244.058528L638.58093 244.058528z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shenghuojiaofei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1023.16032c-214.89664 0-389.71392-172.05248-389.71392-383.52896-0.8192-27.83232 1.72032-127.1808 68.52608-240.06656 103.1168-174.1824 290.0992-380.6208 298.02496-389.3248C494.75584 3.72736 503.15264 0 512 0l0 0c8.82688 0 17.24416 3.72736 23.18336 10.26048 7.90528 8.704 194.92864 215.20384 298.04544 389.38624 66.80576 112.80384 69.3248 212.15232 68.52608 239.9232C901.69344 851.12832 726.87616 1023.16032 512 1023.16032zM512 78.49984c-53.76 61.37856-188.33408 219.60704-267.28448 352.9728-58.24512 98.4064-60.5184 182.74304-59.82208 206.25408C184.9344 816.57856 331.65312 960.512 512 960.512s327.0656-143.95392 327.0656-320.88064c0.73728-25.43616-1.536-109.75232-59.76064-208.0768C700.35456 298.16832 565.76 139.89888 512 78.49984z"  ></path>' +
    '' +
    '<path d="M477.06112 817.3568c-7.35232 0-14.7456-2.56-20.70528-7.82336-12.98432-11.42784-14.21312-31.21152-2.78528-44.21632l135.53664-153.78432L365.50656 611.5328c-12.30848 0-23.49056-7.20896-28.54912-18.432-5.05856-11.22304-3.09248-24.3712 5.03808-33.60768l181.39136-205.824c11.4688-12.96384 31.27296-14.19264 44.21632-2.78528 12.96384 11.44832 14.21312 31.232 2.7648 44.21632l-135.53664 153.8048 223.60064 0c12.30848 0 23.47008 7.20896 28.54912 18.432 5.05856 11.22304 3.09248 24.3712-5.05856 33.60768l-181.37088 205.824C494.3872 813.75232 485.74464 817.3568 477.06112 817.3568z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jifenduihuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M416.256 923.136c-199.168 0-337.408-68.608-337.408-130.048l0-262.656c18.944 16.896 44.544 32.256 75.776 45.056 70.144 29.696 162.816 45.568 261.12 45.568 11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48c-189.952 0-325.12-62.464-336.896-121.856L78.848 256.512c18.944 16.896 44.544 32.256 75.776 45.056 70.144 29.696 162.816 45.568 261.12 45.568s190.976-16.384 261.12-45.568c31.744-13.312 57.344-28.672 76.288-46.08l0 160.768c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48L794.112 181.248c0-0.512 0-1.024 0-1.536 0-1.024 0-2.048 0-3.072 0-49.152-41.472-93.184-117.248-125.44-70.144-29.696-162.816-45.568-261.12-45.568s-190.976 16.384-261.12 45.568C78.336 82.944 36.864 127.488 36.864 176.64c0 4.096 0.512 7.68 1.024 11.776l0 257.024c-0.512 2.048-1.024 3.584-1.024 5.632 0 4.096 0.512 7.68 1.024 11.776L37.888 798.72l0.512 0c3.072 46.592 44.544 89.088 117.248 119.808 70.144 29.696 162.816 45.568 261.12 45.568 11.264 0 20.48-9.216 20.48-20.48S427.52 923.136 416.256 923.136zM415.232 46.592c199.168 0 337.408 68.608 337.408 130.048s-138.752 130.048-337.408 130.048c-199.168 0-337.408-68.608-337.408-130.048S216.064 46.592 415.232 46.592z"  ></path>' +
    '' +
    '<path d="M723.456 459.264C569.856 459.264 445.44 583.68 445.44 737.28s124.928 278.016 278.016 278.016 278.016-124.928 278.016-278.016S876.544 459.264 723.456 459.264zM723.456 969.216c-128 0-231.936-103.936-231.936-231.936 0-128 103.936-231.936 231.936-231.936 128 0 231.936 103.936 231.936 231.936C955.392 865.28 851.456 969.216 723.456 969.216z"  ></path>' +
    '' +
    '<path d="M671.232 630.784c4.096 6.656 7.168 11.776 8.704 16.384 3.584 7.168 8.192 9.216 14.336 6.656 5.632-3.072 7.168-8.192 4.096-15.36-4.096-10.24-9.728-20.48-16.384-31.232-3.072-5.632-7.68-7.168-14.336-4.096-5.632 3.584-7.168 8.192-4.096 14.336C666.112 620.544 668.672 625.152 671.232 630.784z"  ></path>' +
    '' +
    '<path d="M846.336 795.648c-7.168 0.512-10.752 5.12-10.752 12.8 3.584 23.04-4.096 33.28-23.04 30.208l-28.16 0c-10.752 0-16.384-4.096-16.384-11.776l0-70.656 29.184 0c14.336 0.512 21.504-8.192 20.48-26.112l0-45.568c2.048-21.504-7.68-31.232-29.184-28.16l-21.504 0c5.632-10.24 11.776-23.552 18.432-39.936 2.048-6.656 0.512-11.264-4.096-14.336-7.168-3.072-12.288-1.536-15.36 4.096-5.632 15.872-13.312 32.768-23.04 50.176L660.48 656.384c-19.456-0.512-29.184 6.144-28.16 20.48l0 55.296c0 15.36 6.656 23.04 20.48 24.064l26.112 0c3.072 45.568-16.384 73.216-57.344 83.456-7.168 3.072-10.24 7.68-8.704 14.336 3.072 5.632 8.192 7.68 15.36 5.632 50.176-12.8 74.24-47.616 72.704-102.912l46.592 0 0 74.752c0 17.92 10.24 27.136 31.232 27.136l41.472 0c29.696 3.584 41.984-12.8 36.864-50.176C856.064 800.768 852.48 796.672 846.336 795.648zM663.552 737.28c-7.168-0.512-10.752-5.632-10.752-15.36l0-37.888c0-5.12 3.072-7.68 9.728-7.68l128 0c4.096-0.512 6.656 2.56 6.656 9.728l0 42.496c0 5.632-2.56 8.704-7.68 8.704L663.552 737.28z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M949.028571 519.314286L508.342857 107.885714 67.657143 517.485714c-9.142857 7.314286-9.142857 21.942857-1.828572 29.257143 7.314286 9.142857 861.257143 7.314286 866.742858 7.314286 5.485714 0 10.971429-1.828571 16.457142-7.314286 9.142857-5.485714 9.142857-20.114286 0-27.428571z m-133.485714 9.142857c-10.971429 0-21.942857 9.142857-21.942857 21.942857H224.914286c0-10.971429-9.142857-21.942857-21.942857-21.942857-10.971429 0-21.942857 9.142857-21.942858 21.942857v369.371429h256V691.2h142.628572v226.742857h256V548.571429c0-10.971429-9.142857-20.114286-20.114286-20.114286z m0-171.885714c10.971429 0 21.942857-9.142857 21.942857-21.942858V179.2h-170.057143c-10.971429 0-21.942857 9.142857-21.942857 21.942857-1.828571 10.971429 157.257143 155.428571 170.057143 155.428572z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)