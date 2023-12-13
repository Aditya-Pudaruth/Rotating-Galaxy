var e,
  t,
  a,
  n,
  i,
  r,
  o,
  s = new SimplexNoise();
!(function () {
  (t = new THREE.Scene()),
    (a = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.01,
      1e3
    )).position.set(0, 0, 250);
  var s = new THREE.DirectionalLight("#fff", 2);
  s.position.set(0, 50, -30), t.add(s);
  var d = new THREE.AmbientLight("#ffffff", 1);
  d.position.set(0, 20, 20),
    t.add(d),
    (e = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 }));
  var E = document.getElementById("canvas_container");
  e.setSize(E.clientWidth, E.clientHeight),
    e.setPixelRatio(window.devicePixelRatio),
    E.appendChild(e.domElement),
    ((o = new THREE.OrbitControls(a, e.domElement)).autoRotate = !0),
    (o.autoRotateSpeed = 0.5),
    (o.maxDistance = 400),
    (o.minDistance = 100);
  var c = new THREE.TextureLoader(),
    l = c.load("assets/space.jpg"),
    m = c.load("assets/galaxy.jpg"),
    w = c.load("assets/starShape.jpg"),
    p = c.load("assets/twinkleStar.png"),
    h = c.load("assets/twinkleStar2.png"),
    v = new THREE.IcosahedronGeometry(35, 10),
    R = new THREE.MeshPhongMaterial({ map: m });
  (i = new THREE.Mesh(v, R)), t.add(i);
  var y = new THREE.SphereBufferGeometry(150, 40, 40),
    H = new THREE.MeshBasicMaterial({ side: THREE.BackSide, map: l });
  (n = new THREE.Mesh(y, H)), t.add(n);
  for (var f = new THREE.Geometry(), T = 0; T < 40; T++) {
    var g = x(200);
    (g.velocity = THREE.MathUtils.randInt(50, 300)),
      (g.startX = g.x),
      (g.startY = g.y),
      (g.startZ = g.z),
      f.vertices.push(g);
  }
  var u = new THREE.PointsMaterial({
    size: 4,
    color: "#ffffff",
    transparent: !0,
    opacity: 0.75,
    map: w,
    blending: THREE.AdditiveBlending,
  });
  function M(e, t, a) {
    for (
      var n = new THREE.Geometry(),
        i = new THREE.PointsMaterial({
          size: t,
          map: e,
          blending: THREE.AdditiveBlending,
        }),
        r = 0;
      r < a;
      r++
    ) {
      var o = x(THREE.MathUtils.randInt(75, 150));
      n.vertices.push(o);
    }
    return new THREE.Points(n, i);
  }
  function x(e) {
    var t = 2 * Math.PI * Math.random(),
      a = Math.acos(2 * Math.random() - 1),
      n = 0 + e * Math.sin(a) * Math.cos(t),
      i = 0 + e * Math.sin(a) * Math.sin(t),
      r = 0 + e * Math.cos(a);
    return new THREE.Vector3(n, i, r);
  }
  (r = new THREE.Points(f, u)),
    t.add(r),
    t.add(M(p, 15, 25)),
    t.add(M(h, 5, 35)),
    t.add(M(h, 2, 50));
})(),
  (function d() {
    r.geometry.vertices.forEach(function (e) {
      (e.x += (0 - e.x) / e.velocity),
        (e.y += (0 - e.y) / e.velocity),
        (e.z += (0 - e.z) / e.velocity),
        (e.velocity -= 0.2),
        e.x <= 5 &&
          e.x >= -5 &&
          e.z <= 5 &&
          e.z >= -5 &&
          ((e.x = e.startX),
          (e.y = e.startY),
          (e.z = e.startZ),
          (e.velocity = THREE.MathUtils.randInt(50, 300)));
    }),
      i.geometry.vertices.forEach(function (e) {
        var t = Date.now();
        e.normalize();
        var a =
          i.geometry.parameters.radius +
          3 * s.noise3D(e.x + 6e-4 * t, e.y + 4e-4 * t, e.z + 9e-4 * t);
        e.multiplyScalar(a);
      }),
      (i.geometry.verticesNeedUpdate = !0),
      (i.geometry.normalsNeedUpdate = !0),
      i.geometry.computeVertexNormals(),
      i.geometry.computeFaceNormals(),
      (i.rotation.y += 0.002),
      (n.rotation.x += 0.001),
      (n.rotation.y += 0.001),
      (n.rotation.z += 0.001),
      o.update(),
      (r.geometry.verticesNeedUpdate = !0),
      e.render(t, a),
      requestAnimationFrame(d);
  })(),
  window.addEventListener(
    "resize",
    function () {
      var t = window.innerWidth,
        n = window.innerHeight;
      e.setSize(t, n), (a.aspect = t / n), a.updateProjectionMatrix();
    },
    !1
  );
//# sourceMappingURL=index.05de9911.js.map
