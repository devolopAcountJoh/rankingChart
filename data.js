var dataSource =
  "    Switzerland $82, 829 $80, 450 $80, 172 $82, 082 $86, 606\r\n" +
  "    Norway $81, 734 $75, 497 $70, 461 $74, 356 $97, 019\r\n" +
  "    Ireland $78, 583 $69, 650 $63, 197 $61, 995 $55, 493\r\n" +
  "    Iceland $73, 368 $71, 315 $61, 758 $52, 429 $54, 242\r\n" +
  "    Qatar $68, 794 $61, 264 $57, 163 $63, 039 $83, 859\r\n" +
  "    Singapore $64, 582 $60, 298 $56, 724 $55, 647 $57, 563\r\n" +
  "    United States $62, 887 $59, 958 $57, 928 $56, 823 $55, 048\r\n" +
  "    Denmark $61, 391 $57, 141 $54, 664 $53, 255 $62, 549\r\n" +
  "    Australia $57, 396 $54, 066 $49, 971 $56, 756 $62, 511\r\n" +
  "    Sweden $54, 651 $53, 744 $51, 974 $51, 397 $59, 844\r\n" +
  "    Netherlands $53, 022 $48, 555 $46, 008 $45, 175 $52, 830\r\n" +
  "    Austria $51, 500 $47, 432 $45, 238 $44, 178 $51, 717\r\n" +
  "    Finland $50, 175 $46, 192 $43, 777 $42, 811 $50, 260\r\n" +
  "    Hong Kong $48, 676 $46, 226 $43, 734 $42, 432 $40, 315\r\n" +
  "    Germany $47, 616 $44, 240 $42, 099 $41, 140 $47, 960\r\n" +
  "    Belgium $47, 472 $44, 220 $42, 012 $40, 992 $47, 701\r\n" +
  "    Canada $46, 234 $45, 066 $42, 280 $43, 495 $50, 836\r\n" +
  "    UAE $43, 005 $39, 812 $38, 142 $38, 663 $43, 752\r\n" +
  "    United Kingdom $42, 962 $40, 361 $41, 064 $44, 975 $47, 426\r\n" +
  "    New Zealand $42, 331 $42, 260 $40, 027 $38, 560 $44, 534\r\n" +
  "    Andorra $42, 030 $39, 134 $37, 224 $36, 040 $42, 300\r\n" +
  "    Israel $41, 720 $40, 542 $37, 322 $35, 777 $37, 679\r\n" +
  "    France $41, 470 $38, 679 $37, 039 $36, 638 $43, 011\r\n" +
  "    Japan $39, 290 $38, 332 $38, 794 $34, 524 $38, 109\r\n" +
  "    Guam $35, 713 $35, 616 $35, 563 $35, 279 $34, 394\r\n" +
  "    Italy $34, 489 $32, 327 $30, 936 $30, 230 $35, 518\r\n" +
  "    Kuwait $33, 994 $29, 760 $27, 653 $29, 870 $44, 062\r\n" +
  "    Bahamas $32, 218 $31, 827 $31, 589 $31, 406 $29, 445\r\n" +
  "    Puerto Rico $31, 651 $31, 353 $30, 629 $29, 764 $28, 981\r\n" +
  "    Brunei $31, 628 $28, 572 $27, 158 $31, 165 $41, 727\r\n" +
  "    South Korea $31, 380 $29, 803 $27, 623 $27, 105 $27, 811\r\n" +
  "    Spain $30, 324 $28, 101 $26, 505 $25, 732 $29, 462\r\n" +
  "    Malta $30, 030 $27, 284 $25, 152 $24, 077 $26, 012\r\n" +
  "    Cyprus $28, 690 $26, 339 $24, 533 $23, 334 $27, 130\r\n" +
  "    Turks And Caicos Islands $27, 142 $25, 934 $25, 995 $24, 833 $23, 296\r\n" +
  "    Slovenia $26, 042 $23, 443 $21, 623 $20, 882 $24, 215\r\n" +
  "    Bahrain $24, 051 $23, 715 $22, 619 $22, 689 $24, 989\r\n" +
  "    Portugal $23, 403 $21, 437 $19, 978 $19, 242 $22, 074\r\n" +
  "    Saudi Arabia $23, 339 $20, 804 $19, 879 $20, 628 $24, 464\r\n" +
  "    Northern Mariana Islands $23, 259 $28, 305 $22, 247 $16, 691 $15, 279\r\n" +
  "    Estonia $23, 247 $20, 338 $18, 237 $17, 522 $20, 367\r\n" +
  "    Czech Republic $23, 069 $20, 380 $18, 463 $17, 716 $19, 745\r\n" +
  "    Greece $20, 317 $18, 883 $18, 116 $18, 168 $21, 761\r\n" +
  "    Curacao $19, 574 $19, 458 $19, 555 $19, 951 $20, 258\r\n" +
  "    Slovak Republic $19, 444 $17, 510 $16, 506 $16, 309 $18, 671\r\n" +
  "    St.Kitts And Nevis $19, 275 $19, 155 $18, 812 $18, 029 $18, 052\r\n" +
  "    Lithuania $19, 071 $16, 841 $14, 999 $14, 249 $16, 534\r\n" +
  "    Barbados $17, 949 $17, 432 $16, 937 $16, 562 $16, 489\r\n" +
  "    Latvia $17, 855 $15, 548 $14, 153 $13, 699 $15, 740\r\n" +
  "    Uruguay $17, 278 $16, 437 $15, 387 $15, 614 $16, 832\r\n" +
  "    Trinidad And Tobago $17, 130 $16, 238 $16, 177 $18, 290 $20, 271\r\n" +
  "    Antigua And Barbuda $16, 727 $15, 383 $15, 198 $14, 286 $13, 502\r\n" +
  "    Seychelles $16, 434 $15, 684 $15, 078 $14, 745 $14, 700\r\n" +
  "    Oman $16, 415 $15, 130 $14, 722 $16, 151 $20, 132\r\n" +
  "    Hungary $16, 151 $14, 458 $12, 992 $12, 652 $14, 246";



raw_clors = "AliceBlue	#F0F8FF	240, 248, 255\r\n" +
  "AntiqueWhite	#FAEBD7	250, 235, 215\r\n" +
  "Aqua	#00FFFF	0, 255, 255\r\n" +
  "Aquamarine	#7FFFD4	127, 255, 212\r\n" +
  "Azure	#F0FFFF	240, 255, 255\r\n" +
  "Beige	#F5F5DC	245, 245, 220\r\n" +
  "Bisque	#FFE4C4	255, 228, 196\r\n" +
  "Black	#000000	0, 0, 0\r\n" +
  "BlanchedAlmond	#FFEBCD	255, 235, 205\r\n" +
  "Blue	#0000FF	0, 0, 255\r\n" +
  "BlueViolet	#8A2BE2	138, 43, 226\r\n" +
  "Brown	#A52A2A	165, 42, 42\r\n" +
  "BurlyWood	#DEB887	222, 184, 135\r\n" +
  "CadetBlue	#5F9EA0	95, 158, 160\r\n" +
  "Chartreuse	#7FFF00	127, 255, 0\r\n" +
  "Chocolate	#D2691E	210, 105, 30\r\n" +
  "Coral	#FF7F50	255, 127, 80\r\n" +
  "CornflowerBlue	#6495ED	100, 149, 237\r\n" +
  "Cornsilk	#FFF8DC	255, 248, 220\r\n" +
  "Crimson	#DC143C	220, 20, 60\r\n" +
  "Cyan	#00FFFF	0, 255, 255\r\n" +
  "DarkBlue	#00008B	0, 0, 139\r\n" +
  "DarkCyan	#008B8B	0, 139, 139\r\n" +
  "DarkGoldenrod	#B8860B	184, 134, 11\r\n" +
  "DarkGray	#A9A9A9	169, 169, 169\r\n" +
  "DarkGreen	#006400	0, 100, 0\r\n" +
  "DarkGrey	#A9A9A9	169, 169, 169\r\n" +
  "DarkKhaki	#BDB76B	189, 183, 107\r\n" +
  "DarkMagenta	#8B008B	139, 0, 139\r\n" +
  "DarkOliveGreen	#556B2F	85, 107, 47\r\n" +
  "DarkOrange	#FF8C00	255, 140, 0\r\n" +
  "DarkOrchid	#9932CC	153, 50, 204\r\n" +
  "DarkRed	#8B0000	139, 0, 0\r\n" +
  "DarkSalmon	#E9967A	233, 150, 122\r\n" +
  "DarkSeaGreen	#8FBC8F	143, 188, 143\r\n" +
  "DarkSlateBlue	#483D8B	72, 61, 139\r\n" +
  "DarkSlateGray	#2F4F4F	47, 79, 79\r\n" +
  "DarkSlateGrey	#2F4F4F	47, 79, 79\r\n" +
  "DarkTurquoise	#00CED1	0, 206, 209\r\n" +
  "DarkViolet	#9400D3	148, 0, 211\r\n" +
  "DeepPink	#FF1493	255, 20, 147\r\n" +
  "DeepSkyBlue	#00BFFF	0, 191, 255\r\n" +
  "DimGray	#696969	105, 105, 105\r\n" +
  "DodgerBlue	#1E90FF	30, 144, 255\r\n" +
  "FireBrick	#B22222	178, 34, 34\r\n" +
  "FloralWhite	#FFFAF0	255, 250, 240\r\n" +
  "ForestGreen	#228B22	34, 139, 34\r\n" +
  "Fuchsia	#FF00FF	255, 0, 255\r\n" +
  "Gainsboro	#DCDCDC	220, 220, 220\r\n" +
  "GhostWhite	#F8F8FF	248, 248, 255\r\n" +
  "Gold	#FFD700	255, 215, 0\r\n" +
  "Goldenrod	#DAA520	218, 165, 32\r\n" +
  "Gray	#808080	128, 128, 128\r\n" +
  "Green	#008000	0, 128, 0\r\n" +
  "GreenYellow	#ADFF2F	173, 255, 47\r\n" +
  "Grey	#808080	128, 128, 128\r\n" +
  "Honeydew	#F0FFF0	240, 255, 240\r\n" +
  "HotPink	#FF69B4	255, 105, 180\r\n" +
  "IndianRed	#CD5C5C	205, 92, 92\r\n" +
  "Indigo	#4B0082	75, 0, 130\r\n" +
  "Ivory	#FFFFF0	255, 255, 240\r\n" +
  "Khaki	#F0E68C	240, 230, 140\r\n" +
  "Lavender	#E6E6FA	230, 230, 250\r\n" +
  "LavenderBlush	#FFF0F5	255, 240, 245\r\n" +
  "LawnGreen	#7CFC00	124, 252, 0\r\n" +
  "LemonChiffon	#FFFACD	255, 250, 205\r\n" +
  "LightBlue	#ADD8E6	173, 216, 230\r\n" +
  "LightCoral	#F08080	240, 128, 128\r\n" +
  "LightCyan	#E0FFFF	224, 255, 255\r\n" +
  "LightGoldenrodYellow	#FAFAD2	250, 250, 210\r\n" +
  "LightGray	#D3D3D3	211, 211, 211\r\n" +
  "LightGreen	#90EE90	144, 238, 144\r\n" +
  "LightGrey	#D3D3D3	211, 211, 211\r\n" +
  "LightPink	#FFB6C1	255, 182, 193\r\n" +
  "LightSalmon	#FFA07A	255, 160, 122\r\n" +
  "LightSeaGreen	#20B2AA	32, 178, 170\r\n" +
  "LightSkyBlue	#87CEFA	135, 206, 250\r\n" +
  "LightSlateGray	#778899	119, 136, 153\r\n" +
  "LightSlateGrey	#778899	119, 136, 153\r\n" +
  "LightSteelBlue	#B0C4DE	176, 196, 222\r\n" +
  "LightYellow	#FFFFE0	255, 255, 224\r\n" +
  "Lime	#00FF00	0, 255, 0\r\n" +
  "LimeGreen	#32CD32	50, 205, 50\r\n" +
  "Linen	#FAF0E6	250, 240, 230\r\n" +
  "Magenta	#FF00FF	255, 0, 255\r\n" +
  "Maroon	#800000	128, 0, 0\r\n" +
  "MediumAquamarine	#66CDAA	102, 205, 170\r\n" +
  "MediumBlue	#0000CD	0, 0, 205\r\n" +
  "MediumOrchid	#BA55D3	186, 85, 211\r\n" +
  "MediumPurple	#9370DB	147, 112, 219\r\n" +
  "MediumSeaGreen	#3CB371	60, 179, 113\r\n" +
  "MediumSlateBlue	#7B68EE	123, 104, 238\r\n" +
  "MediumSpringGreen	#00FA9A	0, 250, 154\r\n" +
  "MediumTurquoise	#48D1CC	72, 209, 204\r\n" +
  "MediumVioletRed	#C71585	199, 21, 133\r\n" +
  "MidnightBlue	#191970	25, 25, 112\r\n" +
  "MintCream	#F5FFFA	245, 255, 250\r\n" +
  "MistyRose	#FFE4E1	255, 228, 225\r\n" +
  "Moccasin	#FFE4B5	255, 228, 181\r\n" +
  "NavajoWhite	#FFDEAD	255, 222, 173\r\n" +
  "Navy	#000080	0, 0, 128\r\n" +
  "OldLace	#FDF5E6	253, 245, 230\r\n" +
  "Olive	#808000	128, 128, 0\r\n" +
  "OliveDrab	#6B8E23	107, 142, 35\r\n" +
  "Orange	#FFA500	255, 165, 0\r\n" +
  "OrangeRed	#FF4500	255, 69, 0\r\n" +
  "Orchid	#DA70D6	218, 112, 214\r\n" +
  "PaleGoldenrod	#EEE8AA	238, 232, 170\r\n" +
  "PaleGreen	#98FB98	152, 251, 152\r\n" +
  "PaleTurquoise	#AFEEEE	175, 238, 238\r\n" +
  "PaleVioletRed	#DB7093	219, 112, 147\r\n" +
  "PapayaWhip	#FFEFD5	255, 239, 213\r\n" +
  "PeachPuff	#FFDAB9	255, 218, 185\r\n" +
  "Peru	#CD853F	205, 133, 63\r\n" +
  "Pink	#FFC0CB	255, 192, 203\r\n" +
  "Plum	#DDA0DD	221, 160, 221\r\n" +
  "PowderBlue	#B0E0E6	176, 224, 230\r\n" +
  "Purple	#800080	128, 0, 128\r\n" +
  "Rebeccapurple	#663399	102, 51, 153\r\n" +
  "Red	#FF0000	255, 0, 0\r\n" +
  "RosyBrown	#BC8F8F	188, 143, 143\r\n" +
  "RoyalBlue	#4169E1	65, 105, 225\r\n" +
  "SaddleBrown	#8B4513	139, 69, 19\r\n" +
  "Salmon	#FA8072	250, 128, 114\r\n" +
  "SandyBrown	#F4A460	244, 164, 96\r\n" +
  "SeaGreen	#2E8B57	46, 139, 87\r\n" +
  "Seashell	#FFF5EE	255, 245, 238\r\n" +
  "Sienna	#A0522D	160, 82, 45\r\n" +
  "Silver	#C0C0C0	192, 192, 192\r\n" +
  "SkyBlue	#87CEEB	135, 206, 235\r\n" +
  "SlateBlue	#6A5ACD	106, 90, 205\r\n" +
  "SlateGray	#708090	112, 128, 144\r\n" +
  "SlateGrey	#708090	112, 128, 144\r\n" +
  "Snow	#FFFAFA	255, 250, 250\r\n" +
  "SpringGreen	#00FF7F	0, 255, 127\r\n" +
  "SteelBlue	#4682B4	70, 130, 180\r\n" +
  "Tan	#D2B48C	210, 180, 140\r\n" +
  "Teal	#008080	0, 128, 128\r\n" +
  "Thistle	#D8BFD8	216, 191, 216\r\n" +
  "Tomato	#FF6347	255, 99, 71\r\n" +
  "Turquoise	#40E0D0	64, 224, 208\r\n" +
  "Violet	#EE82EE	238, 130, 238\r\n" +
  "Wheat	#F5DEB3	245, 222, 179\r\n" +
  "White	#FFFFFF	255, 255, 255\r\n" +
  "WhiteSmoke	#F5F5F5	245, 245, 245\r\n" +
  "Yellow	#FFFF00	255, 255, 0\r\n" +
  "YellowGreen	#9ACD32	154, 205, 50";