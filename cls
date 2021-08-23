[1mdiff --git a/BMS/.vs/BMS/v16/.suo b/BMS/.vs/BMS/v16/.suo[m
[1mindex d3e7948..45d4e13 100644[m
Binary files a/BMS/.vs/BMS/v16/.suo and b/BMS/.vs/BMS/v16/.suo differ
[1mdiff --git a/BookMyShow.Models/Models/Movie.cs b/BookMyShow.Models/Models/Movie.cs[m
[1mindex 8ae4fda..4c6529b 100644[m
[1m--- a/BookMyShow.Models/Models/Movie.cs[m
[1m+++ b/BookMyShow.Models/Models/Movie.cs[m
[36m@@ -1,6 +1,7 @@[m
 ﻿using PetaPoco.NetCore;[m
 using System;[m
 using System.Collections.Generic;[m
[32m+[m[32musing System.ComponentModel.DataAnnotations;[m
 using System.Linq;[m
 using System.Text;[m
 using System.Threading.Tasks;[m
[36m@@ -10,7 +11,8 @@[m [mnamespace BookMyShow.Models.Models[m
 {[m
     [TableName("Movies")][m
     public class Movie[m
[31m-        {[m
[32m+[m[32m        {[m[41m   [m
[32m+[m[32m            [Key][m
             public int MovieId { get; set; }[m
             public string MovieName { get; set; }[m
             public int Duration { get; set; }[m
[1mdiff --git a/BookMyShow.Models/obj/Debug/net5.0/BookMyShow.Models.csproj.AssemblyReference.cache b/BookMyShow.Models/obj/Debug/net5.0/BookMyShow.Models.csproj.AssemblyReference.cache[m
[1mindex 63ccb6a..f5e894a 100644[m
Binary files a/BookMyShow.Models/obj/Debug/net5.0/BookMyShow.Models.csproj.AssemblyReference.cache and b/BookMyShow.Models/obj/Debug/net5.0/BookMyShow.Models.csproj.AssemblyReference.cache differ
