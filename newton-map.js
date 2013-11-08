{"version":3,"file":"newton.js","sources":["src/body.js","src/edge.js","src/frame.js","src/layer.js","src/lineargravity.js","src/material.js","src/particle.js","src/pixirenderer.js","src/radialgravity.js","src/rectangle.js","src/renderer.js","src/simulator.js","src/vector.js"],"names":["Newton","Body","material","this","particles","edges","prototype","addParticle","particle","push","addEdge","edge","each","method","args","i","length","apply","callback","exports","Edge","p1","p2","Material","simple","compute","_rect","Rectangle","COLLISION_TOLERANCE","getAbc","x1","y1","x2","y2","a","b","c","anchor","position","clone","vector","sub","getLength","angle","getAngle","normal","turnLeft","unit","bounds","fromVectors","expand","getCoords","x","y","getRepelled","Vector","add","getProjection","dot","getDot","scale","getAngleDelta","findIntersection","bounds1","bounds2","set","overlaps","l1","l2","det","contains","scratch","getReflection","velocity","restitution","dir","friction","velN","multScalar","velT","reflectedVel","timeoutFrame","simulator","currTime","Date","getTime","timeToCall","Math","max","lastTime","id","setTimeout","cancelTimeoutFrame","clearTimeout","window","vendors","isOpera","opera","navigator","userAgent","indexOf","Object","toString","call","HTMLElement","chrome","requestAnimationFrame","cancelAnimationFrame","frame","bind","cancelFrame","Layer","bodies","forces","watchedLayers","wrapper","undefined","container","cachedParticles","cachedForces","cachedEdges","respondTo","layers","addForce","force","wrapIn","rect","containBy","addBody","body","collect","ilen","j","jlen","watched","integrate","time","applyTo","constrain","wrap","contain","collide","LinearGravity","strength","falloff","rotate","setAngle","setStrength","accelerateVector","options","weight","maxVelocity","maxVelocitySquared","setMaxVelocity","v","mod","Particle","size","lastPosition","lastValidPosition","acceleration","randomDrag","random","randomness","colliding","copy","drag","min","getSquaredLength","zero","placeAt","moveBy","dx","dy","setVelocity","subXY","right","left","bottom","top","newX","width","newY","height","mass","getMass","getSquaredSpeed","attractSquare","m","minDist","delta","r","f","ratio","nearest","intersect","oldDistance","newDistance","partOfEdge","wall","bouncePoint","reflectedVelocity","rgbToHex","g","PixiRenderer","el","stage","PIXI","Stage","setInteractive","renderer","autoDetectRenderer","view","style","display","appendChild","infoText","Text","fill","font","addChild","graphics","Graphics","sim","clear","drawParticles","drawEdges","drawForces","setText","fps","render","lineStyle","RadialGravity","beginFill","drawCircle","endFill","pos","last","brightness","moveTo","lineTo","setLocation","arguments","v1","v2","amount","Renderer","ctx","getContext","particleCount","edgeCount","drawCounts","drawFPS","save","fillStyle","fillRect","restore","lineWidth","strokeStyle","beginPath","arc","PI","lineCap","join","stroke","closePath","fillText","text","noop","Simulator","preSimulator","integrationFps","iterations","step","_step","running","frames","countTime","countInterval","accumulator","simulationStep","start","now","stop","simulate","newLayer","toFixed","mult","multVector","reverse","div","scalar","turnRight","sin","cos","getCross","sqrt","atan2"],"mappings":"CAAC,SAAUA;IAET;IAIA,SAASC,KAAKC;QACZ,OAAMC,gBAAgBF,QACtBE,KAAKC,gBACLD,KAAKE,YACLF,KAAKD,WAAWA;QAFhBC,UADoC,IAAIF,KAAKC;;IAM/CD,KAAKK,UAAUC,cAAc,SAASC;QACpCL,KAAKC,UAAUK,KAAKD;OAGtBP,KAAKK,UAAUI,UAAU,SAASC;QAChCR,KAAKE,MAAMI,KAAKE;OAGlBV,KAAKK,UAAUM,OAAO,SAASC,QAAQC;QAGrC,KAFA,IACIN,UADAO,IAAIZ,KAAKC,UAAUY,QAEjBD,OACJP,WAAWL,KAAKC,UAAUW;QAC1BP,SAASK,QAAQI,MAAMT,UAAUM;OAIrCb,KAAKK,UAAUY,WAAW,SAASA;QAEjC,KADA,IAAIH,IAAIZ,KAAKC,UAAUY,QAChBD,OACLG,SAASf,KAAKC,UAAUW;OAI5Bf,OAAOC,OAAOA;EAEM,sBAAZkB,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UCvCxE,SAAUnB;IAET;IAEA,SAASoB,KAAKC,IAAIC,IAAIpB;QACpB,OAAMC,gBAAgBiB,QACtBjB,KAAKkB,KAAKA,IACVlB,KAAKmB,KAAKA,IACVnB,KAAKD,WAAWA,YAAYqB,SAASC;QAErCrB,KAAKsB,WAELtB,KAAKuB,QAAQ,IAAI1B,OAAO2B,UAAU,GAAG,GAAG,GAAG,IAN3CxB,UADoC,IAAIiB,KAAKC,IAAIC,IAAIpB;;IAUvDkB,KAAKQ,sBAAsB,IAE3BR,KAAKS,SAAS,SAASC,IAAIC,IAAIC,IAAIC;QACjC,IAAIC,IAAID,KAAKF,IACTI,IAAIL,KAAKE,IACTI,IAAIF,IAAIJ,KAAKK,IAAIJ;QAErB;YAASG,GAAGA;YAAGC,GAAGA;YAAGC,GAAGA;;OAI1BhB,KAAKd,UAAUmB,UAAU;QACvBtB,KAAKkC,SAASlC,KAAKkB,GAAGiB,SAASC,SAC/BpC,KAAKqC,SAASrC,KAAKmB,GAAGgB,SAASC,QAAQE,IAAItC,KAAKkB,GAAGiB;QACnDnC,KAAKa,SAASb,KAAKqC,OAAOE,aAC1BvC,KAAKwC,QAAQxC,KAAKqC,OAAOI,YACzBzC,KAAK0C,SAAS1C,KAAKqC,OAAOD,QAAQO,WAAWC;QAC7C5C,KAAK4C,OAAO5C,KAAKqC,OAAOD,QAAQQ,QAChC5C,KAAK6C,SAAShD,OAAO2B,UAClBsB,YAAY9C,KAAKkB,GAAGiB,UAAUnC,KAAKmB,GAAGgB,UACtCY,OAAO9B,KAAKQ;OAGjBR,KAAKd,UAAU6C,YAAY;QACzB;YACErB,IAAI3B,KAAKkB,GAAGiB,SAASc;YACrBrB,IAAI5B,KAAKkB,GAAGiB,SAASe;YACrBrB,IAAI7B,KAAKmB,GAAGgB,SAASc;YACrBnB,IAAI9B,KAAKmB,GAAGgB,SAASe;;OAIzBjC,KAAKd,UAAUgD,cAAc,SAASF,GAAGC;QACvC,OAAO,IAAIrD,OAAOuD,OAAOH,GAAGC,GAAGG,IAAIrD,KAAK0C;OAG1CzB,KAAKd,UAAUmD,gBAAgB,SAASjB;QACtC,IAAIkB,MAAMvD,KAAKqC,OAAOmB,OAAOnB;QAC7B,OAAOrC,KAAK4C,KAAKR,QAAQqB,MAAMF;OAGjCtC,KAAKd,UAAUuD,gBAAgB,SAASrB;QACtC,OAAOrC,KAAKwC,QAAQH,OAAOI;OAG7BxB,KAAKd,UAAUuB,SAAS;QACtB,OAAOT,KAAKS,OAAO1B,KAAKkB,GAAGiB,SAASc,GAAGjD,KAAKkB,GAAGiB,SAASe,GACtDlD,KAAKmB,GAAGgB,SAASc,GAAGjD,KAAKmB,GAAGgB,SAASe;OAGzCjC,KAAKd,UAAUwD,mBAAmB,SAAShC,IAAIC,IAAIC,IAAIC;QAGrD,IAAI8B,UAAU5D,KAAK6C,QACfgB,UAAU7D,KAAKuB,MAAMuC,IAAInC,IAAIC,IAAIC,IAAIC,IAAIiB,OAAO9B,KAAKQ;QAEzD,KAAKmC,QAAQG,SAASF,UAAU,QAAO;QAEvC,IAAIG,KAAKhE,KAAK0B,UACVuC,KAAKhD,KAAKS,OAAOC,IAAIC,IAAIC,IAAIC,KAC7BoC,MAAMF,GAAGjC,IAAIkC,GAAGjC,IAAIiC,GAAGlC,IAAIiC,GAAGhC;QAElC,IAAY,MAARkC,KAAW,QAAO;QAEtB,IAAIjB,KAAKgB,GAAGjC,IAAIgC,GAAG/B,IAAK+B,GAAGhC,IAAIiC,GAAGhC,KAAKiC,KACnChB,KAAKc,GAAGjC,IAAIkC,GAAGhC,IAAIgC,GAAGlC,IAAIiC,GAAG/B,KAAKiC;QAEtC,KAAON,QAAQO,SAASlB,GAAGC,OAAMW,QAAQM,SAASlB,GAAGC,IAAM,QAAO;QAGlE,IAAIK,MAAM1D,OAAOuD,OAAOgB,QAAQN,IAAIjC,KAAKF,IAAIG,KAAKF,IAAI4B,OAAOxD,KAAK0C;QAElE,OAAIa,OAAO,KAAU;YAGnBN,GAAGA;YACHC,GAAGA;;OAMPjC,KAAKd,UAAUkE,gBAAgB,SAASC,UAAUC;QAChD,IAAIC,MAAMxE,KAAK0C,OAAON,SAClBqC,WAAWzE,KAAKD,SAAS0E,UACzBC,OAAOF,IAAIG,WAAWL,SAASd,OAAOgB,MAAMG,WAAWJ,cACvDK,OAAON,SAASlC,QAAQE,IAAIoC,MAAMC,WAAW,IAAIF,WACjDI,eAAeD,KAAKtC,IAAIoC;QAC5B,OAAOG;OAGThF,OAAOoB,OAAOA;EAEM,sBAAZD,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC5GxE,SAAUnB;IAET;IAkCA,SAASiF,aAAaC;QACpB,IAAIC,WAAW,IAAIC,OAAOC,WACtBC,aAAaC,KAAKC,IAAI,GAAG,MAAML,WAAWM,YAC1CC,KAAKC,WAAW;YAAaT,UAAUC,WAAWG;WAAgBA;QAEtE,OADAG,WAAWN,WAAWG,YACfI;;IAGT,SAASE,mBAAmBF;QAC1BG,aAAaH;;IAvCf,IAAID,WAAW;IAGf,IAAsB,sBAAXK,QAAwB;QACjC,IAAIC,YAAW,MAAM,OAAO,UAAU,OAClCC,YAAYF,OAAOG,SAASC,UAAUC,UAAUC,QAAQ,YAAY;QAEzDC,OAAO/F,UAAUgG,SAASC,KAAKT,OAAOU,aAAaJ,QAAQ,iBAAiB,KAC1EN,OAAOW,WAAWT;QAEnC,KAAK,IAAI5C,IAAI,GAAGA,IAAI2C,QAAQ/E,WAAW8E,OAAOY,yBAAyBtD,GACrE0C,OAAOY,wBAAwBZ,OAAOC,QAAQ3C,KAAG;QACjD0C,OAAOa,uBAAuBb,OAAOC,QAAQ3C,KAAG,2BAA2B0C,OAAOC,QAAQ3C,KAAG;QAG1F0C,OAAOY,0BACVZ,OAAOY,wBAAwBzB,cAC/Ba,OAAOa,uBAAuBf;QAGhC5F,OAAO4G,QAAQd,OAAOY,sBAAsBG,KAAKf,SACjD9F,OAAO8G,cAAchB,OAAOa,qBAAqBE,KAAKf;WAKtD9F,OAAO4G,QAAQ3B,cACfjF,OAAO8G,cAAclB;EAeH,sBAAZzE,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UChDxE,SAAUnB;IAET;IAIA,SAAS+G;QACP,OAAM5G,gBAAgB4G,SACtB5G,KAAK6G,aACL7G,KAAK8G,aACL9G,KAAK+G,kBAAiB/G;QACtBA,KAAKgH,UAAUC,QACfjH,KAAKkH,YAAYD,QAIjBjH,KAAKmH,sBACLnH,KAAKoH;QACLpH,KAAKqH,kBAVLrH,UADqC,IAAI4G;;IAc3CA,MAAMzG,UAAUmH,YAAY,SAASC;QAEnC,OADAvH,KAAK+G,gBAAgBQ,cACdvH;OAGT4G,MAAMzG,UAAUqH,WAAW,SAASC;QAElC,OADAzH,KAAK8G,OAAOxG,KAAKmH,QACVzH;OAIT4G,MAAMzG,UAAUuH,SAAS,SAASC;QAEhC,OADA3H,KAAKgH,UAAUW,MACR3H;OAGT4G,MAAMzG,UAAUyH,YAAY,SAASD;QAEnC,OADA3H,KAAKkH,YAAYS,MACV3H;OAGT4G,MAAMzG,UAAU0H,UAAU,SAASC;QAEjC,OADA9H,KAAK6G,OAAOvG,KAAKwH,OACV9H;OAIT4G,MAAMzG,UAAU4H,UAAU;QACxB,IAKInH,GAAGoH,MAAMC,GAAGC,MALZjI,YAAYD,KAAKmH,iBACjBL,SAAS9G,KAAKoH,cACdlH,QAAQF,KAAKqH,aACbR,SAAS7G,KAAK6G,QACdsB,UAAUnI,KAAK+G;QAOnB,KAJA9G,UAAUY,SAAS,GACnBiG,OAAOjG,SAAS,GAChBX,MAAMW,SAAS,GAEVD,IAAI,GAAGoH,OAAOnB,OAAOhG,QAAYmH,OAAJpH,GAAUA,KAC1CX,UAAUK,KAAKQ,MAAMb,WAAW4G,OAAOjG,GAAGX;QAG5C,KAAKW,IAAI,GAAGoH,OAAOhI,KAAK+G,cAAclG,QAAYmH,OAAJpH,GAAUA,KAEtD,KADAkG,OAAOxG,KAAKQ,MAAMgG,QAAQqB,QAAQvH,GAAGkG;QAChCmB,IAAI,GAAGC,OAAOC,QAAQvH,GAAGiG,OAAOhG,QAAYqH,OAAJD,GAAUA,KACrD/H,MAAMI,KAAKQ,MAAMZ,OAAOiI,QAAQvH,GAAGiG,OAAOoB,GAAG/H;OAKnD0G,MAAMzG,UAAUiI,YAAY,SAASC;QAKnC,KAAK,IAFDhI,UAFAJ,YAAYD,KAAKmH,iBACjBL,SAAS9G,KAAKoH,cAGTxG,IAAI,GAAGoH,OAAO/H,UAAUY,QAAYmH,OAAJpH,GAAUA,KAAK;YACtDP,WAAWJ,UAAUW;YACrB,KAAK,IAAIqH,IAAI,GAAGC,OAAOpB,OAAOjG,QAAYqH,OAAJD,GAAUA,KAC9CnB,OAAOmB,GAAGK,QAAQjI;YAEpBA,SAAS+H,UAAUC;;OAIvBzB,MAAMzG,UAAUoI,YAAY;QAG1B,KAAK,IAFDtI,YAAYD,KAAKmH,iBAEZvG,IAAI,GAAGoH,OAAO/H,UAAUY,QAAYmH,OAAJpH,GAAUA,KAC7CZ,KAAKgH,WAAS/G,UAAUW,GAAG4H,KAAKxI,KAAKgH;QACrChH,KAAKkH,aAAWjH,UAAUW,GAAG6H,QAAQzI,KAAKkH;OAKlDN,MAAMzG,UAAUuI,UAAU;QAIxB,KAAK,IAHDzI,YAAYD,KAAKmH,iBACjBjH,QAAQF,KAAKqH,aAERzG,IAAI,GAAGoH,OAAO/H,UAAUY,QAAYmH,OAAJpH,GAAUA,KACjDX,UAAUW,GAAG8H,QAAQxI;OAIzBL,OAAO+G,QAAQA;EAEK,sBAAZ5F,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC3GxE,SAAUnB;IAET;IAIA,SAAS8I,cAAcnG,OAAOoG,UAAUC;QACtC,OAAM7I,gBAAgB2I,iBACtB3I,KAAKwC,QAAQA,OACbxC,KAAK4I,WAAWA;QAChB5I,KAAKqC,SAAS,IAAIxC,OAAOuD,OAAO,GAAGwF,UAAUE,OAAOtG,QAFpDxC,UAD6C,IAAI2I,cAAcnG,OAAOoG,UAAUC;;IAMlFF,cAAcxI,UAAU4I,WAAW,SAASvG;QAC1CxC,KAAKwC,QAAQA,OACbxC,KAAKqC,OAAOyB,IAAI,GAAG9D,KAAK4I,UAAUE,OAAO9I,KAAKwC;OAGhDmG,cAAcxI,UAAU6I,cAAc,SAASJ;QAC7C5I,KAAK4I,WAAWA,UAChB5I,KAAKqC,OAAOyB,IAAI,GAAG9D,KAAK4I,UAAUE,OAAO9I,KAAKwC;OAIhDmG,cAAcxI,UAAUmI,UAAU,SAASjI;QACzCA,SAAS4I,iBAAiBjJ,KAAKqC;OAGjCxC,OAAO8I,gBAAgBA;EAEH,sBAAZ3H,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC9BxE,SAAUnB;IAET;IAIA,SAASuB,SAAS8H;QAChB,OAAMlJ,gBAAgBoB,YACtB8H,UAAUA,eACVlJ,KAAKmJ,SAASD,QAAQC,UAAU;QAChCnJ,KAAKuE,cAAc2E,QAAQ3E,eAAe,GAC1CvE,KAAKyE,WAAWyE,QAAQzE,YAAY;QACpCzE,KAAKoJ,cAAcF,QAAQE,eAAe,KAC1CpJ,KAAKqJ,qBAAqBrJ,KAAKoJ,cAAcpJ,KAAKoJ;QALlDF,UADwC,IAAI9H,SAAS8H;;IASvD9H,SAASjB,UAAUmJ,iBAAiB,SAASC;QAG3C,OAFAvJ,KAAKoJ,cAAcG,GACnBvJ,KAAKqJ,qBAAqBE,IAAIA,GACvBvJ;OAGToB,SAASC,SAAS,IAAID,YAEtBvB,OAAOuB,WAAWA;EAEE,sBAAZJ,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC1BxE,SAAUnB;IAET;IAGA,SAAS2J,IAAIzH,GAAGC;QACd,QAASD,IAAIC,IAAKA,KAAKA;;IAGzB,SAASyH,SAASxG,GAAGC,GAAGwG,MAAM3J;QAC5B,OAAMC,gBAAgByJ,YACtBzJ,KAAKmC,WAAW,IAAItC,OAAOuD,OAAOH,GAAGC,IACrClD,KAAK2J,eAAe3J,KAAKmC,SAASC;QAClCpC,KAAK4J,oBAAoB5J,KAAKmC,SAASC,SACvCpC,KAAKsE,WAAW,IAAIzE,OAAOuD,OAAO,GAAG;QACrCpD,KAAK6J,eAAe,IAAIhK,OAAOuD,OAAO,GAAG,IACzCpD,KAAKD,WAAWA,YAAYF,OAAOuB,SAASC;QAC5CrB,KAAK0J,OAAOA,QAAQ,GACpB1J,KAAK8J,aAAa1E,KAAK2E,WAAWN,SAASO,aAAa;QAExDhK,KAAKiK,aAAY,GATjBjK,UADwC,IAAIyJ,SAASxG,GAAGC,GAAGwG,MAAM3J;;IAanE0J,SAASO,aAAa,IAEtBP,SAAStJ,UAAUiI,YAAY,SAASC;QAGtCrI,KAAKsE,SACF4F,KAAKlK,KAAKmC,UACVG,IAAItC,KAAK2J;QAEZ,IAAIQ,OAAO/E,KAAKgF,IAAI,GAAGpK,KAAKsE,SAAS+F,sBAAsBrK,KAAKD,SAASsJ,qBAAqBrJ,KAAK8J;QAEnG9J,KAAKsE,SAASb,MAAM,IAAI0G,OAGxBnK,KAAK6J,aACFpG,MAAM,IAAI0G,MACV1G,MAAM4E,OAAOA;QAGhBrI,KAAK2J,aAAaO,KAAKlK,KAAKmC,WAG5BnC,KAAKmC,SACFkB,IAAIrD,KAAKsE,UACTjB,IAAIrD,KAAK6J;QAGZ7J,KAAK6J,aAAaS,QAGlBtK,KAAK4J,kBAAkBM,KAAKlK,KAAK2J,eAEjC3J,KAAKiK,aAAY;OAGnBR,SAAStJ,UAAUoK,UAAU,SAAStH,GAAGC;QAIvC,OAHAlD,KAAKmC,SAAS2B,IAAIb,GAAGC,IACrBlD,KAAK2J,aAAaO,KAAKlK,KAAKmC,WAC5BnC,KAAK4J,kBAAkBM,KAAKlK,KAAK2J;QAC1B3J;OAGTyJ,SAAStJ,UAAUqK,SAAS,SAASC,IAAIC;QAGvC,OAFA1K,KAAK2J,eAAe3J,KAAKmC,SAASC,SAClCpC,KAAKmC,SAASkB,IAAIoH,IAAIC,KACf1K;OAGTyJ,SAAStJ,UAAUwK,cAAc,SAAS1H,GAAGC;QAE3C,OADAlD,KAAK2J,aAAaO,KAAKlK,KAAKmC,UAAUyI,MAAM3H,GAAGC,IACxClD;OAGTyJ,SAAStJ,UAAUsI,UAAU,SAAS5F;QAChC7C,KAAKmC,SAASc,IAAIJ,OAAOgI,QAC3B7K,KAAKmC,SAASc,IAAIjD,KAAK2J,aAAa1G,IAAIjD,KAAK4J,kBAAkB3G,IAAIJ,OAAOgI,QAEnE7K,KAAKmC,SAASc,IAAIJ,OAAOiI,SAChC9K,KAAKmC,SAASc,IAAIjD,KAAK2J,aAAa1G,IAAIjD,KAAK4J,kBAAkB3G,IAAIJ,OAAOiI;QAExE9K,KAAKmC,SAASe,IAAIL,OAAOkI,SAC3B/K,KAAKmC,SAASe,IAAIlD,KAAK2J,aAAazG,IAAIlD,KAAK4J,kBAAkB1G,IAAIL,OAAOkI,SAEnE/K,KAAKmC,SAASe,IAAIL,OAAOmI,QAChChL,KAAKmC,SAASe,IAAIlD,KAAK2J,aAAazG,IAAIlD,KAAK4J,kBAAkB1G,IAAIL,OAAOmI;OAI9EvB,SAAStJ,UAAUqI,OAAO,SAAS3F;QACjC,IAAIyB,WAAWtE,KAAKmC,SAASC,QAAQE,IAAItC,KAAK2J,eAC1CsB,OAAOzB,IAAIxJ,KAAKmC,SAASc,GAAGJ,OAAOqI,SAASrI,OAAOiI,MACnDK,OAAO3B,IAAIxJ,KAAKmC,SAASe,GAAGL,OAAOuI,UAAUvI,OAAOmI;QACxDhL,KAAK2J,aAAa1G,IAAIjD,KAAK4J,kBAAkB3G,IAAIgI,OAAO3G,SAASrB,GACjEjD,KAAK2J,aAAazG,IAAIlD,KAAK4J,kBAAkB1G,IAAIiI,OAAO7G,SAASpB;QACjElD,KAAKmC,SAASc,IAAIgI,MAClBjL,KAAKmC,SAASe,IAAIiI;OAGpB1B,SAAStJ,UAAU8I,mBAAmB,SAAS5G;QAC7CrC,KAAK6J,aAAaxG,IAAIhB;OAGxBoH,SAAStJ,UAAUsH,QAAQ,SAASxE,GAAGC,GAAGmI;QACxCA,OAAOA,QAAQrL,KAAKsL,WACpBtL,KAAK6J,aAAaxG;YAChBJ,GAAGA,IAAIoI;YACPnI,GAAGA,IAAImI;;OAIX5B,SAAStJ,UAAUmL,UAAU;QAC3B,OAAOtL,KAAK0J,OAAO1J,KAAKD,SAASoJ;OAGnCM,SAAStJ,UAAUoL,kBAAkB;QACnC,OAAOvL,KAAKsE,SAAS+F;OAGvBZ,SAAStJ,UAAUqL,gBAAgB,SAASvI,GAAGC,GAAGuI,GAAGC;QACnD,IAAIL,OAAOrL,KAAKsL,WACZK,QAAQ,IAAI9L,OAAOuD,OAAOH,GAAGC,GAAGZ,IAAItC,KAAKmC,WACzCyJ,IAAIxG,KAAKC,IAAIsG,MAAMpJ,aAAamJ,WAAW,IAC3CG,IAAKJ,IAAIJ,QAASO,IAAIA,IACtBE,QAAQL,KAAKA,IAAIJ;QAErBrL,KAAK6J,aAAaxG;YAChBJ,IAAI4I,KAAKF,MAAM1I,IAAI2I,KAAKE;YACxB5I,IAAI2I,KAAKF,MAAMzI,IAAI0I,KAAKE;;OAI5BrC,SAAStJ,UAAUuI,UAAU,SAASxI;QAMpC,KALA,IAAI6L,SAASC,WACTvB,IAAIC,IAAIuB,aAAaC,aACrBC,YACAvL,IAAIV,MAAMW,QAEPD,OAGLuL,aAAanM,SAASE,MAAMU,GAAGM,MAAMlB,SAASE,MAAMU,GAAGO;QACvD6K,aAAaG,cAAcjM,MAAMU,GAAG+C,iBAClC3D,KAAK2J,aAAa1G,GAAGjD,KAAK2J,aAAazG,GACvClD,KAAKmC,SAASc,GAAGjD,KAAKmC,SAASe;QAE7B8I,cAGFvB,KAAKuB,UAAU/I,IAAIjD,KAAK2J,aAAa1G,GACrCyH,KAAKsB,UAAU9I,IAAIlD,KAAK2J,aAAazG;QACjC6I,WACFE,cAAcF,QAAQtB,KAAKsB,QAAQtB,KAAKsB,QAAQrB,KAAKqB,QAAQrB,IAC7DwB,cAAczB,KAAKA,KAAKC,KAAKA;QACXuB,cAAdC,gBACFH;YACEtB,IAAIA;YACJC,IAAIA;YACJzH,GAAG+I,UAAU/I;YACbC,GAAG8I,UAAU9I;YACbkJ,MAAMlM,MAAMU;cAKhBmL;YACEtB,IAAIA;YACJC,IAAIA;YACJzH,GAAG+I,UAAU/I;YACbC,GAAG8I,UAAU9I;YACbkJ,MAAMlM,MAAMU;;QAKpB,IAAImL,SAAS;YAEX,IAAIzH,WAAWtE,KAAKmC,SAASC,QAAQE,IAAItC,KAAK2J,eAC1C0C,cAAcN,QAAQK,KAAKjJ,YAAY4I,QAAQ9I,GAAG8I,QAAQ7I,IAC1DoJ,oBAAoBP,QAAQK,KAAK/H,cAAcC,UAAUtE,KAAKD,SAASwE;YAQ3E,OANAvE,KAAKmC,SAAS+H,KAAKmC,cACnBrM,KAAK2K,YAAY2B,kBAAkBrJ,GAAGqJ,kBAAkBpJ;YACxDlD,KAAK4J,oBAAoByC,aAEzBrM,KAAKiK,aAAY,GAEV8B;;OAIXlM,OAAO4J,WAAWA;EAEE,sBAAZzI,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UCnMxE,SAAUnB;IAET;IAEA,SAAS0M,SAASX,GAAGY,GAAGxK;QACtB,QAAS,KAAK,OAAO4J,KAAK,OAAOY,KAAK,KAAKxK;;IAG7C,SAASyK,aAAaC,IAAIxB,OAAOE;QAC/B,OAAMpL,gBAAgByM,gBAEtBzM,KAAK2M,QAAQ,IAAIC,KAAKC,MAAM,IAAU,IACtC7M,KAAK2M,MAAMG,gBAAe;QAE1B9M,KAAKkL,QAAQA,OACblL,KAAKoL,SAASA,QACdpL,KAAK+M,WAAWH,KAAKI,mBAAmBhN,KAAKkL,OAAOlL,KAAKoL,QAAQ,OAAM,IAAO;QAC9EpL,KAAK+M,SAASE,KAAKC,MAAMC,UAAU,SACnCT,GAAGU,YAAYpN,KAAK+M,SAASE;QAE7BjN,KAAKqN,WAAW,IAAIT,KAAKU,KAAK;YAAaC,MAAM;YAAWC,MAAK;YACjExN,KAAK2M,MAAMc,SAASzN,KAAKqN,WACzBrN,KAAK0N,WAAW,IAAId,KAAKe,YACzB3N,KAAK2M,MAAMc,SAASzN,KAAK0N;QACzB1N,KAAKe,WAAWf,KAAKe,SAAS2F,KAAK1G,OAbnCA,UAF4C,IAAIyM,aAAaC,IAAIxB,OAAOE;;IAkB1EqB,aAAatM;QACXY,UAAU,SAASsH,MAAMuF;YACvB,IAAI3N,YAAY,GACZC,QAAQ;YAEZF,KAAK0N,SAASG;YAEd,KAAK,IAAIjN,IAAI,GAAGoH,OAAO4F,IAAIrG,OAAO1G,QAAYmH,OAAJpH,GAAUA,KAAK;gBACvD,KAAK,IAAIqH,IAAI,GAAGC,OAAO0F,IAAIrG,OAAO3G,GAAGiG,OAAOhG,QAAYqH,OAAJD,GAAUA,KAC5DhI,aAAaD,KAAK8N,cAAcF,IAAIrG,OAAO3G,GAAGiG,OAAOoB,GAAGhI;gBACxDC,SAASF,KAAK+N,UAAUH,IAAIrG,OAAO3G,GAAGiG,OAAOoB,GAAG/H;gBAElDF,KAAKgO,WAAWJ,IAAIrG,OAAO3G,GAAGkG;;YAGhC9G,KAAKqN,SAASY,QAAQ,UAAUL,IAAIM,MAAM,kBAAkBjO,YAAY,cAAcC;YAEtFF,KAAK+M,SAASoB,OAAOnO,KAAK2M;;QAE5BqB,YAAY,SAASlH;YAEnB9G,KAAK0N,SAASU,UAAU,GAAG,UAAU;YAErC,KAAK,IAAIxN,IAAI,GAAGoH,OAAOlB,OAAOjG,QAAYmH,OAAJpH,GAAUA,KAAK;gBACnD,IAAI6G,QAAQX,OAAOlG;gBACf6G,iBAAiB5H,OAAOwO,kBAC1BrO,KAAK0N,SAASY,UAAU,UAAU;gBAClCtO,KAAK0N,SAASa,WAAW9G,MAAMxE,GAAGwE,MAAMvE,GAAqC,KAAlCuE,MAAMmB,WAAWnB,MAAMmB;gBAClE5I,KAAK0N,SAASc;;;QAIpBV,eAAe,SAAS7N;YAGtB,KAAK,IAFDI,UAAUoO,KAAKC,MAAMrD,MAAMsD,YAEtB1G,IAAI,GAAGC,OAAOjI,UAAUY,QAAYqH,OAAJD,GAAUA,KACjD5H,WAAWJ,UAAUgI;YACrBwG,MAAMpO,SAAS8B,UACfuM,OAAOrO,SAASuJ,mBAChByB,OAAOhL,SAASiL;YAChBqD,gBAAiC,QAAhBtD,OAAO,KAAK,KACzBhL,SAAS4J,YACXjK,KAAK0N,SAASU,UAAU/C,MAAMkB,SAAS,KAAK,KAAK,MAAM,KAGvDvM,KAAK0N,SAASU,UAAU/C,MAAMkB,SAAS,KAAK,KAAKoC,YAAY,MAAMA,aAAa;YAElF3O,KAAK0N,SAASkB,OAAOF,KAAKzL,IAAI,GAAGyL,KAAKxL,IACtClD,KAAK0N,SAASmB,OAAOJ,IAAIxL,IAAI,GAAGwL,IAAIvL;YAGtC,OAAOjD,UAAUY;;QAEnBkN,WAAW,SAAS7N;YAClBF,KAAK0N,SAASU,UAAU,GAAG,UAAU;YAErC,KADA,IAAI5N,MAAMI,IAAIV,MAAMW,QACbD,OACLJ,OAAON,MAAMU,GAAGoC,aAChBhD,KAAK0N,SAASkB,OAAOpO,KAAKmB,IAAInB,KAAKoB;YACnC5B,KAAK0N,SAASmB,OAAOrO,KAAKqB,IAAIrB,KAAKsB;YAErC,OAAO5B,MAAMW;;OAIjBhB,OAAO4M,eAAeA;EAEF,sBAAZzL,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC9FxE,SAAUnB;IAET;IAIA,SAASwO,cAAcpL,GAAGC,GAAG0F,UAAUC;QACrC,OAAM7I,gBAAgBqO,iBACtBrO,KAAKiD,IAAIA,GACTjD,KAAKkD,IAAIA,GACTlD,KAAK4I,WAAWA;QAFhB5I,UAD6C,IAAIqO,cAAcpL,GAAGC,GAAG0F,UAAUC;;IAMjFwF,cAAclO,UAAU2O,cAAc,SAAS7L,GAAGC;QAChDlD,KAAKiD,IAAIA,GACTjD,KAAKkD,IAAIA;OAGXmL,cAAclO,UAAU6I,cAAc,SAASJ;QAC7C5I,KAAK4I,WAAWA;OAIlByF,cAAclO,UAAUmI,UAAU,SAASjI;QACzCA,SAASmL,cAAcxL,KAAKiD,GAAGjD,KAAKkD,GAAGlD,KAAK4I,UAAU;OAGxD/I,OAAOwO,gBAAgBA;EAEH,sBAAZrN,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC7BxE,SAAUnB;IAET;IAIA,SAAS2B,UAAUsJ,MAAME,KAAKH,OAAOE;QACnC,OAAM/K,gBAAgBwB,aACtBxB,KAAK8D,IAAIhD,MAAMd,MAAM+O,YAArB/O,UADyC,IAAIwB,UAAUsJ,MAAME,KAAKH,OAAOE;;IAI3EvJ,UAAUsB,cAAc,SAASkM,IAAIC;QACnC,OAAO,IAAIzN,UAAUwN,GAAG/L,GAAG+L,GAAG9L,GAAG+L,GAAGhM,GAAGgM,GAAG/L;OAG5C1B,UAAUrB;QACR2D,KAAK,SAASgH,MAAME,KAAKH,OAAOE;YAO9B,OANA/K,KAAK8K,OAAO1F,KAAKgF,IAAIU,MAAMD,QAC3B7K,KAAKgL,MAAM5F,KAAKgF,IAAIY,KAAKD,SACzB/K,KAAK6K,QAAQzF,KAAKC,IAAIwF,OAAOC;YAC7B9K,KAAK+K,SAAS3F,KAAKC,IAAI0F,QAAQC,MAC/BhL,KAAKkL,QAAQlL,KAAK6K,QAAQ7K,KAAK8K,MAC/B9K,KAAKoL,SAASpL,KAAK+K,SAAS/K,KAAKgL;YAC1BhL;;QAETmE,UAAU,SAASlB,GAAGC;YACpB,OAAQD,KAAKjD,KAAK8K,QAAQ7H,KAAKjD,KAAK6K,SAAS3H,KAAKlD,KAAKgL,OAAO9H,KAAKlD,KAAK+K;;QAE1EhH,UAAU,SAAS4D;YACjB,SAASA,KAAKmD,OAAO9K,KAAK6K,SAASlD,KAAKkD,QAAQ7K,KAAK8K,QACjDnD,KAAKqD,MAAMhL,KAAK+K,UAAUpD,KAAKoD,SAAS/K,KAAKgL;;QAEnDjI,QAAQ,SAASmM;YAKf,OAJAlP,KAAK8K,QAAQoE,QACblP,KAAK6K,SAASqE,QACdlP,KAAKgL,OAAOkE,QACZlP,KAAK+K,UAAUmE;YACRlP;;OAIXH,OAAO2B,YAAYA;EAEC,sBAAZR,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC3CxE,SAAUnB;IAET;IAIA,SAASsP,SAASzC;QAChB,OAAM1M,gBAAgBmP,YAEtBnP,KAAKoP,MAAM1C,GAAG2C,WAAW,OACzBrP,KAAKkL,QAAQwB,GAAGxB;QAChBlL,KAAKoL,SAASsB,GAAGtB,QACjBpL,KAAKe,WAAWf,KAAKe,SAAS2F,KAAK1G,OAHnCA,UAFwC,IAAImP,SAASzC;;IAQvDyC,SAAShP;QACPY,UAAU,SAASsH,MAAMuF;YACvB,IAAIwB,MAAMpP,KAAKoP,KACXE,gBAAgB,GAChBC,YAAY;YAEhBvP,KAAK6N,MAAMuB,KAAK/G;YAEhB,KAAK,IAAIzH,IAAI,GAAGoH,OAAO4F,IAAIrG,OAAO1G,QAAYmH,OAAJpH,GAAUA,KAAK;gBACvD,KAAK,IAAIqH,IAAI,GAAGC,OAAO0F,IAAIrG,OAAO3G,GAAGiG,OAAOhG,QAAYqH,OAAJD,GAAUA,KAC5DqH,iBAAiBtP,KAAK8N,cAAcsB,KAAKxB,IAAIrG,OAAO3G,GAAGiG,OAAOoB,GAAGhI;gBACjEsP,aAAavP,KAAK+N,UAAUqB,KAAKxB,IAAIrG,OAAO3G,GAAGiG,OAAOoB,GAAG/H;gBAE3DF,KAAKgO,WAAWoB,KAAKxB,IAAIrG,OAAO3G,GAAGkG;;YAGrC9G,KAAKwP,WAAWJ,KAAKE,eAAeC,YACpCvP,KAAKyP,QAAQL,KAAKxB;;QAEpBC,OAAO,SAASuB;YACdA,IAAIM,QACJN,IAAIO,YAAY,WAChBP,IAAIQ,SAAS,GAAG,GAAG5P,KAAKkL,OAAOlL,KAAKoL;YACpCgE,IAAIS;;QAEN7B,YAAY,SAASoB,KAAKtI;YACxBsI,IAAIM,QACJN,IAAIU,YAAY,GAChBV,IAAIW,cAAc,6BAClBX,IAAIO,YAAY;YAEhB,KAAK,IAAI/O,IAAI,GAAGoH,OAAOlB,OAAOjG,QAAYmH,OAAJpH,GAAUA,KAAK;gBACnD,IAAI6G,QAAQX,OAAOlG;gBACf6G,iBAAiB5H,OAAOwO,kBAC1Be,IAAIY,aACJZ,IAAIa,IAAIxI,MAAMxE,GAAGwE,MAAMvE,GAAqC,KAAlCuE,MAAMmB,WAAWnB,MAAMmB,UAAgB,GAAG,IAAIxD,KAAK8K,KAAI;gBACjFd,IAAI7B;;YAIR6B,IAAIS;;QAEN/B,eAAe,SAASsB,KAAKnP;YAC3B,IAAII,UAAUoO,KAAKC,MAAMrD,MAAMsD;YAE/BS,IAAIM,QACJN,IAAIe,UAAU;YAEd,KAAK,IAAIlI,IAAI,GAAGC,OAAOjI,UAAUY,QAAYqH,OAAJD,GAAUA,KACjD5H,WAAWJ,UAAUgI;YACrBwG,MAAMpO,SAAS8B,UACfuM,OAAOrO,SAASuJ,mBAChByB,OAAOhL,SAASiL;YAChBqD,gBAAiC,QAAhBtD,OAAO,KAAK,KAE7B+D,IAAIY,aACJZ,IAAIU,YAAYzE;YAEd+D,IAAIW,cADF1P,SAAS4J,YACO,2BAGA,YAAW,KAAK,KAAK0E,YAAY,MAAMA,aAAYyB,KAAK,OAAO;YAEnFhB,IAAIR,OAAOF,KAAKzL,GAAGyL,KAAKxL,IACxBkM,IAAIP,OAAOJ,IAAIxL,GAAGwL,IAAIvL,IAAI,IAC1BkM,IAAIiB;YAKN,OAFAjB,IAAIS,WAEG5P,UAAUY;;QAEnBkN,WAAW,SAASqB,KAAKlP;YACvBkP,IAAIM,QACJN,IAAIW,cAAc,4BAClBX,IAAIU,YAAY;YAEhB,KADA,IAAItP,MAAMI,IAAIV,MAAMW,QACbD,OACLJ,OAAON,MAAMU,GAAGoC,aAChBoM,IAAIY;YACJZ,IAAIR,OAAOpO,KAAKmB,IAAInB,KAAKoB,KACzBwN,IAAIP,OAAOrO,KAAKqB,IAAIrB,KAAKsB,KACzBsN,IAAIkB,aACJlB,IAAIiB;YAIN,OAFAjB,IAAIS,WAEG3P,MAAMW;;QAEf2O,YAAY,SAASJ,KAAKE,eAAeC;YACvCH,IAAIM,QACJN,IAAIO,YAAY,QAChBP,IAAI5B,OAAO,kBACX4B,IAAImB,SAAS,gBAAgBjB,eAAe,IAAI;YAChDF,IAAImB,SAAS,YAAYhB,WAAW,IAAI,KACxCH,IAAIS;;QAENJ,SAAS,SAASL,KAAKxB;YACrB,IAAI4C,OAAO,UAAU5C,IAAIM;YACzBkB,IAAIM,QACJN,IAAIO,YAAY,QAChBP,IAAI5B,OAAO,kBACX4B,IAAImB,SAASC,MAAM,IAAI;YACvBpB,IAAIS;;OAIRhQ,OAAOsP,WAAWA;EAEE,sBAAZnO,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UC5HxE,SAAUnB;IAET;IAEA,SAAS4Q;IAIT,SAASC,UAAUC,cAAc5D,UAAU6D,gBAAgBC;QACzD,OAAM7Q,gBAAgB0Q,aACtB1Q,KAAK2Q,eAAeA,gBAAgBF,MACpCzQ,KAAK+M,WAAWA,YAAY0D;QAC5BzQ,KAAK8Q,OAAO9Q,KAAK+Q,MAAMrK,KAAK1G,OAC5BA,KAAKsF,WAAW,GAChBtF,KAAKgR,WAAU,GACfhR,KAAKkO,MAAM;QACXlO,KAAKiR,SAAS,GACdjR,KAAKkR,YAAY,GACjBlR,KAAKmR,gBAAgB,KACrBnR,KAAKoR,cAAc;QACnBpR,KAAKqR,iBAAiB,OAAQT,kBAAkB,KAChD5Q,KAAKuH,aACLvH,KAAK6Q,aAAaA,cAAc;QAZhC7Q,UADyC,IAAI0Q,UAAUC,cAAc5D,UAAU6D,gBAAgBC;;IAgBjGH,UAAUvQ,UAAUmR,QAAQ;QAC1BtR,KAAKgR,WAAU,GACfhR,KAAKkR,YAAYjM,KAAKsM,QAAQ,KAC9B1R,OAAO4G,MAAMzG,KAAK8Q;OAGpBJ,UAAUvQ,UAAUqR,OAAO;QACzBxR,KAAKgR,WAAU;OAGjBN,UAAUvQ,UAAUsR,WAAW,SAASpJ;QACtC,IAAIzH,GACAqH,GADGD,OAAOhI,KAAKuH,OAAO1G,QACnBqH,OAAOlI,KAAK6Q;QAEnB,KAAKjQ,IAAI,GAAOoH,OAAJpH,GAAUA,KACpBZ,KAAKuH,OAAO3G,GAAGmH,QAAQM,OACvBrI,KAAKuH,OAAO3G,GAAGwH,UAAUC;QAG3B,KAAKJ,IAAI,GAAOC,OAAJD,GAAUA,KAAK;YACzB,KAAKrH,IAAI,GAAOoH,OAAJpH,GAAUA,KAAKZ,KAAKuH,OAAO3G,GAAG2H,UAAUF;YACpD,KAAKzH,IAAI,GAAOoH,OAAJpH,GAAUA,KAAKZ,KAAKuH,OAAO3G,GAAG8H,QAAQL;;OAKtDqI,UAAUvQ,UAAUyG,QAAQ;QAC1B,IAAI8K,WAAW7R,OAAO+G;QAEtB,OADA5G,KAAKuH,OAAOjH,KAAKoR,WACVA;OAGThB,UAAUvQ,UAAU4Q,QAAQ;QAC1B,IAAK/Q,KAAKgR,SAAV;YAEA,IAAI3I,OAAOpD,KAAKsM,OACZT,OAAOzI,OAAOrI,KAAKsF;YAKvB,KAJIwL,OAAO,QAAKA,OAAO,IAEvB9Q,KAAKoR,eAAeN,MAEb9Q,KAAKoR,eAAepR,KAAKqR,kBAC9BrR,KAAK2Q,aAAa3Q,KAAKqR,gBAAgBrR;YACvCA,KAAKyR,SAASzR,KAAKqR,iBACnBrR,KAAKoR,eAAepR,KAAKqR;YAG3BrR,KAAK+M,SAAS+D,MAAM9Q,OAEpBA,KAAKiR,UACD5I,QAAQrI,KAAKkR,cACflR,KAAKkO,OAAoE,OAA7DlO,KAAKiR,UAAUjR,KAAKmR,gBAAgB9I,OAAOrI,KAAKkR,aAAmBS,QAAQ;YACvF3R,KAAKiR,SAAS,GACdjR,KAAKkR,YAAY7I,OAAOrI,KAAKmR,gBAG/BnR,KAAKsF,WAAW+C;YAChBxI,OAAO4G,MAAMzG,KAAK8Q;;OAGpBjR,OAAO6Q,YAAYA;EAEC,sBAAZ1P,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB,UCvFxE,SAAUnB;IAET;IAIA,SAASuD,OAAOH,GAAGC;QACjB,OAAMlD,gBAAgBoD,UACtBpD,KAAKiD,IAAIA,GACTjD,KAAKkD,IAAIA,GADTlD,UADsC,IAAIoD,OAAOH,GAAGC;;IAKtDE,OAAOgB,UAAU,IAAIhB,UAErBA,OAAOjD,UAAUiC,QAAQ;QACvB,OAAO,IAAIvC,OAAOuD,OAAOpD,KAAKiD,GAAGjD,KAAKkD;OAGxCE,OAAOjD,UAAU+J,OAAO,SAASX;QAG/B,OAFAvJ,KAAKiD,IAAIsG,EAAEtG,GACXjD,KAAKkD,IAAIqG,EAAErG,GACJlD;OAGToD,OAAOjD,UAAUmK,OAAO;QAGtB,OAFAtK,KAAKiD,IAAI,GACTjD,KAAKkD,IAAI,GACFlD;OAGToD,OAAOjD,UAAU2D,MAAM,SAASb,GAAGC;QAGjC,OAFAlD,KAAKiD,IAAIA,GACTjD,KAAKkD,IAAIA,GACFlD;OAGToD,OAAOjD,UAAUkD,MAAM,SAASkG;QAG9B,OAFAvJ,KAAKiD,KAAKsG,EAAEtG,GACZjD,KAAKkD,KAAKqG,EAAErG,GACLlD;OAGToD,OAAOjD,UAAUmC,MAAM,SAASiH;QAG9B,OAFAvJ,KAAKiD,KAAKsG,EAAEtG,GACZjD,KAAKkD,KAAKqG,EAAErG,GACLlD;OAGToD,OAAOjD,UAAUyK,QAAQ,SAAS3H,GAAGC;QAGnC,OAFAlD,KAAKiD,KAAKA,GACVjD,KAAKkD,KAAKA,GACHlD;OAGToD,OAAOjD,UAAUyR,OAAOxO,OAAOjD,UAAU0R,aAAa,SAAStI;QAG7D,OAFAvJ,KAAKiD,KAAKsG,EAAEtG,GACZjD,KAAKkD,KAAKqG,EAAErG,GACLlD;OAGToD,OAAOjD,UAAU2R,UAAU;QAGzB,OAFA9R,KAAKiD,KAAKjD,KAAKiD,GACfjD,KAAKkD,KAAKlD,KAAKkD,GACRlD;OAGToD,OAAOjD,UAAU4R,MAAM,SAASxI;QAG9B,OAFAvJ,KAAKiD,KAAKsG,EAAEtG,GACZjD,KAAKkD,KAAKqG,EAAErG,GACLlD;OAGToD,OAAOjD,UAAUwE,aAAavB,OAAOjD,UAAUsD,QAAQ,SAASuO;QAG9D,OAFAhS,KAAKiD,KAAK+O,QACVhS,KAAKkD,KAAK8O,QACHhS;OAGToD,OAAOjD,UAAUyC,OAAO;QAEtB,OADA5C,KAAKyD,MAAM,IAAIzD,KAAKuC,cACbvC;OAGToD,OAAOjD,UAAU8R,YAAY;QAC3B,IAAIhP,IAAIjD,KAAKiD,GACTC,IAAIlD,KAAKkD;QAGb,OAFAlD,KAAKiD,KAAKC,GACVlD,KAAKkD,IAAID,GACFjD;OAGToD,OAAOjD,UAAUwC,WAAW;QAC1B,IAAIM,IAAIjD,KAAKiD,GACTC,IAAIlD,KAAKkD;QAGb,OAFAlD,KAAKiD,IAAIC,GACTlD,KAAKkD,KAAKD,GACHjD;OAGToD,OAAOjD,UAAU2I,SAAS,SAAStG;QACjC,IAAIS,IAAIjD,KAAKiD,GACTC,IAAIlD,KAAKkD,GACTgP,MAAM9M,KAAK8M,IAAI1P,QACf2P,MAAM/M,KAAK+M,IAAI3P;QAGnB,OAFAxC,KAAKiD,IAAIA,IAAIkP,MAAMjP,IAAIgP,KACvBlS,KAAKkD,IAAID,IAAIiP,MAAMhP,IAAIiP,KAChBnS;OAGToD,OAAOjD,UAAUqD,SAAS,SAAS+F;QACjC,OAAOvJ,KAAKiD,IAAIsG,EAAEtG,IAAIjD,KAAKkD,IAAIqG,EAAErG;OAGnCE,OAAOjD,UAAUiS,WAAW,SAAS7I;QACnC,OAAOvJ,KAAKiD,IAAIsG,EAAErG,IAAIlD,KAAKkD,IAAIqG,EAAEtG;OAGnCG,OAAOjD,UAAUoC,YAAY;QAC3B,OAAO6C,KAAKiN,KAAKrS,KAAKiD,IAAIjD,KAAKiD,IAAIjD,KAAKkD,IAAIlD,KAAKkD;OAGnDE,OAAOjD,UAAUkK,mBAAmB;QAClC,OAAOrK,KAAKiD,IAAIjD,KAAKiD,IAAIjD,KAAKkD,IAAIlD,KAAKkD;OAGzCE,OAAOjD,UAAUsC,WAAW;QAC1B,OAAO2C,KAAKkN,MAAMtS,KAAKkD,GAAGlD,KAAKiD;OAGjCpD,OAAOuD,SAASA;EAEI,sBAAZpC,UAAyBhB,KAAa,SAAEA,KAAa,eAAUgB"}