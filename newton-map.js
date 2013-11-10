{"version":3,"file":"newton.js","sources":["src/body.js","src/distanceconstraint.js","src/edge.js","src/frame.js","src/layer.js","src/lineargravity.js","src/material.js","src/particle.js","src/pixirenderer.js","src/radialgravity.js","src/rectangle.js","src/renderer.js","src/simulator.js","src/vector.js"],"names":["Newton","Body","material","this","particles","edges","constraints","simulator","undefined","simParticles","simEdges","simConstraints","prototype","addTo","Error","push","apply","addParticle","particle","Particle","Array","slice","call","arguments","addEdge","edge","Edge","addConstraint","constraint","DistanceConstraint","each","method","args","i","length","callback","exports","p1","p2","distance","getDistance","isDestroyed","pos1","position","pos2","diff","clone","sub","getLength","resolve","delta","invmass1","getMass","invmass2","factor","correction1","scale","correction2","correct","getCoords","x1","x","y1","y","x2","y2","Material","simple","compute","_rect","Rectangle","COLLISION_TOLERANCE","getAbc","a","b","c","anchor","vector","angle","getAngle","normal","turnLeft","unit","bounds","fromVectors","expand","getRepelled","Vector","add","getProjection","dot","getDot","getAngleDelta","findIntersection","bounds1","bounds2","set","overlaps","l1","l2","det","contains","scratch","getReflection","velocity","restitution","dir","friction","velN","multScalar","velT","reflectedVel","timeoutFrame","currTime","Date","getTime","timeToCall","Math","max","lastTime","id","setTimeout","cancelTimeoutFrame","clearTimeout","window","vendors","isOpera","opera","navigator","userAgent","indexOf","Object","toString","HTMLElement","chrome","requestAnimationFrame","cancelAnimationFrame","frame","bind","cancelFrame","Layer","bodies","forces","watchedLayers","wrapper","container","cachedParticles","cachedForces","cachedEdges","respondTo","layers","addForce","force","wrapIn","rect","containBy","addBody","body","collect","ilen","j","jlen","watched","integrate","time","applyTo","constrain","wrap","contain","collide","LinearGravity","strength","falloff","rotate","setAngle","setStrength","accelerateVector","options","weight","maxVelocity","maxVelocitySquared","setMaxVelocity","v","mod","size","lastPosition","lastValidPosition","acceleration","randomDrag","random","randomness","pinned","colliding","copy","drag","min","getSquaredLength","zero","placeAt","destroy","moveBy","dx","dy","subXY","pin","Infinity","setVelocity","right","left","bottom","top","newX","width","newY","height","applyForce","mass","getSquaredSpeed","attractSquare","m","minDist","r","f","ratio","nearest","intersect","oldDistance","newDistance","partOfEdge","wall","bouncePoint","reflectedVelocity","rgbToHex","g","PixiRenderer","el","stage","PIXI","Stage","setInteractive","renderer","autoDetectRenderer","view","style","display","appendChild","infoText","Text","fill","font","addChild","graphics","Graphics","sim","clear","drawParticles","drawEdges","drawForces","setText","fps","render","lineStyle","RadialGravity","beginFill","drawCircle","endFill","pos","last","brightness","moveTo","lineTo","setLocation","v1","v2","amount","Renderer","ctx","getContext","drawConstraints","drawCounts","drawFPS","save","fillStyle","fillRect","restore","lineWidth","strokeStyle","beginPath","arc","PI","lineCap","lineJoin","stroke","closePath","counts","fillText","text","noop","Simulator","preSimulator","integrationFps","iterations","step","_step","running","frames","countTime","countInterval","accumulator","simulationStep","start","now","stop","simulate","cull","array","splice","entity","findParticle","radius","found","newLayer","toFixed","mult","multVector","reverse","div","scalar","turnRight","sin","cos","getCross","sqrt","atan2"],"mappings":"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"}