"use strict";
(("undefined" != typeof self ? self : this)["wpJsonpChessCom_play-computer"] = ("undefined" != typeof self ? self : this)["wpJsonpChessCom_play-computer"] || []).push([[8915], {
    8915: function(e, t, o) {
        o.r(t);
        o.d(t, {
            createRenderer: function() {
                return createDefaultRenderer
            }
        });
        var r = o(43475)
          , n = o(10472);
        function createAnalysisOverlayMethods({board: e}) {
            let {classList: t} = e.el;
            return {
                addAnalysisOverlay,
                removeAnalysisOverlay
            };
            function addAnalysisOverlay() {
                t.add("analysis-overlay")
            }
            function removeAnalysisOverlay() {
                t.remove("analysis-overlay")
            }
        }
        var i = o(67234)
          , a = o(22276)
          , s = o(19356);
        let l = {
            a1: {
                x: 6.25,
                y: 93.75
            },
            a2: {
                x: 6.25,
                y: 81.25
            },
            a3: {
                x: 6.25,
                y: 68.75
            },
            a4: {
                x: 6.25,
                y: 56.25
            },
            a5: {
                x: 6.25,
                y: 43.75
            },
            a6: {
                x: 6.25,
                y: 31.25
            },
            a7: {
                x: 6.25,
                y: 18.75
            },
            a8: {
                x: 6.25,
                y: 6.25
            },
            b1: {
                x: 18.75,
                y: 93.75
            },
            b2: {
                x: 18.75,
                y: 81.25
            },
            b3: {
                x: 18.75,
                y: 68.75
            },
            b4: {
                x: 18.75,
                y: 56.25
            },
            b5: {
                x: 18.75,
                y: 43.75
            },
            b6: {
                x: 18.75,
                y: 31.25
            },
            b7: {
                x: 18.75,
                y: 18.75
            },
            b8: {
                x: 18.75,
                y: 6.25
            },
            c1: {
                x: 31.25,
                y: 93.75
            },
            c2: {
                x: 31.25,
                y: 81.25
            },
            c3: {
                x: 31.25,
                y: 68.75
            },
            c4: {
                x: 31.25,
                y: 56.25
            },
            c5: {
                x: 31.25,
                y: 43.75
            },
            c6: {
                x: 31.25,
                y: 31.25
            },
            c7: {
                x: 31.25,
                y: 18.75
            },
            c8: {
                x: 31.25,
                y: 6.25
            },
            d1: {
                x: 43.75,
                y: 93.75
            },
            d2: {
                x: 43.75,
                y: 81.25
            },
            d3: {
                x: 43.75,
                y: 68.75
            },
            d4: {
                x: 43.75,
                y: 56.25
            },
            d5: {
                x: 43.75,
                y: 43.75
            },
            d6: {
                x: 43.75,
                y: 31.25
            },
            d7: {
                x: 43.75,
                y: 18.75
            },
            d8: {
                x: 43.75,
                y: 6.25
            },
            e1: {
                x: 56.25,
                y: 93.75
            },
            e2: {
                x: 56.25,
                y: 81.25
            },
            e3: {
                x: 56.25,
                y: 68.75
            },
            e4: {
                x: 56.25,
                y: 56.25
            },
            e5: {
                x: 56.25,
                y: 43.75
            },
            e6: {
                x: 56.25,
                y: 31.25
            },
            e7: {
                x: 56.25,
                y: 18.75
            },
            e8: {
                x: 56.25,
                y: 6.25
            },
            f1: {
                x: 68.75,
                y: 93.75
            },
            f2: {
                x: 68.75,
                y: 81.25
            },
            f3: {
                x: 68.75,
                y: 68.75
            },
            f4: {
                x: 68.75,
                y: 56.25
            },
            f5: {
                x: 68.75,
                y: 43.75
            },
            f6: {
                x: 68.75,
                y: 31.25
            },
            f7: {
                x: 68.75,
                y: 18.75
            },
            f8: {
                x: 68.75,
                y: 6.25
            },
            g1: {
                x: 81.25,
                y: 93.75
            },
            g2: {
                x: 81.25,
                y: 81.25
            },
            g3: {
                x: 81.25,
                y: 68.75
            },
            g4: {
                x: 81.25,
                y: 56.25
            },
            g5: {
                x: 81.25,
                y: 43.75
            },
            g6: {
                x: 81.25,
                y: 31.25
            },
            g7: {
                x: 81.25,
                y: 18.75
            },
            g8: {
                x: 81.25,
                y: 6.25
            },
            h1: {
                x: 93.75,
                y: 93.75
            },
            h2: {
                x: 93.75,
                y: 81.25
            },
            h3: {
                x: 93.75,
                y: 68.75
            },
            h4: {
                x: 93.75,
                y: 56.25
            },
            h5: {
                x: 93.75,
                y: 43.75
            },
            h6: {
                x: 93.75,
                y: 31.25
            },
            h7: {
                x: 93.75,
                y: 18.75
            },
            h8: {
                x: 93.75,
                y: 6.25
            }
        };
        var d = o(40501)
          , c = o(96131);
        let u = d.ox.WIDTH / 2
          , f = d.ox.HEAD_HEIGHT
          , g = d.ox.TAIL_PADDING
          , m = d.ox.HEAD_WIDTH / 2;
        function getStraightArrowPoints({from: e, to: t}) {
            let o = (0,
            a.e)({
                from: e,
                to: t
            });
            return `
    ${e.x - u} ${e.y + g},
    ${e.x - u} ${e.y + o - f},
    ${e.x - m} ${e.y + o - f},
    ${e.x} ${e.y + o},
    ${e.x + m} ${e.y + o - f},
    ${e.x + u} ${e.y + o - f},
    ${e.x + u} ${e.y + g}
  `.trim()
        }
        function createStraightArrow({from: e, polygon: t, to: o}) {
            let r = (0,
            c.A)({
                from: e,
                to: o
            });
            return t.setAttribute("transform", `rotate(${r} ${e.x} ${e.y})`),
            t.setAttribute("points", getStraightArrowPoints({
                from: e,
                to: o
            })),
            t
        }
        let y = d.ox.WIDTH / 2
          , h = d.ox.HEAD_HEIGHT
          , p = d.ox.TAIL_PADDING
          , v = d.ox.HEAD_WIDTH / 2;
        function getKnightArrowPoints({from: e}) {
            return `
    ${e.x - y} ${e.y + p},
    ${e.x - y} ${e.y + 25 + y},
    ${e.x + 12.5 - h} ${e.y + 25 + y},
    ${e.x + 12.5 - h} ${e.y + 25 + v},
    ${e.x + 12.5} ${e.y + 25},
    ${e.x + 12.5 - h} ${e.y + 25 - v},
    ${e.x + 12.5 - h} ${e.y + 25 - y},
    ${e.x + y} ${e.y + 25 - y},
    ${e.x + y} ${e.y + p}
  `.trim()
        }
        var x = o(37101);
        function createKnightArrow({from: e, polygon: t, slope: o, to: r}) {
            let n = `rotate(${(0,
            x.$)({
                from: e,
                slope: o,
                to: r
            })} ${e.x} ${e.y})`;
            return d.T6.includes(o) && (n += ` scale(-1, 1) translate(-${2 * e.x}, 0)`),
            t.setAttribute("transform", n),
            t.setAttribute("points", getKnightArrowPoints({
                from: e
            })),
            t
        }
        var S = o(69454);
        function createArrow(e, t) {
            if (!e.key)
                return;
            let {color: o, from: r, opacity: n, to: i} = e.data
              , c = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            console.log("color = ",o, " opacity = ",n, " from = ",r," to = ",i)
            c.setAttribute("id", `arrow-${r}${i}`);
            c.setAttribute("data-arrow", `${r}${i}`);
            c.setAttribute("class", "arrow");
            let {arrowColors: u} = t.options;
            c.style.fill = (0,
            S.j)(o, u);
            n && (c.style.opacity = String(n));
            let f = l[r]
              , g = l[i];
            if (!f || !g)
                return;
            let m = (0,
            a.e)({
                from: f,
                to: g
            })
              , y = (0,
            s.t)({
                from: f,
                to: g
            });
            return d.Th.includes(y) && m === d.BN ? createKnightArrow({
                from: f,
                polygon: c,
                slope: y,
                to: g
            }) : createStraightArrow({
                from: f,
                polygon: c,
                to: g
            })
        }
        function createArrowsMethods({board: e}) {
            let t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("viewBox", "0 0 100 100");
            t.classList.add("arrows");
            e.addToDom({
                el: t,
                type: i.R.Arrows
            });
            let o = /* @__PURE__ */
            new Map;
            return {
                addArrows,
                removeArrows
            };
            function addArrows(e, r) {
                e.forEach(e => {
                    let n = createArrow(e, r);
                    if (n) {
                        console.log("arrow that i appended = ",n);
                        t.appendChild(n);
                        o.set(e.key, n)
                    }
                }
                )
            }
            function removeArrows(e) {
                e.forEach(e => {
                    let {key: r} = e
                      , n = o.get(r);
                    if (n) {
                        t.removeChild(n);
                        o.delete(r)
                    }
                }
                )
            }
        }
        var P = o(57322)
          , C = o(3342)
          , E = o(23511)
          , A = o(79972)
          , $ = o(72254);
        let w = 300
          , b = `transition: background-image ${w}ms linear;`;
        function createStyleDOM({boardStyles: e, options: t, pieceStyles: o}) {
            updateStyles(t);
            return {
                destroy,
                getStyleEl,
                getPieceStyles: () => o,
                updateStyles
            };
            function destroy() {
                let e = document.getElementById(getStyleId());
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            function getStyleEl() {
                return document.getElementById(getStyleId())
            }
            function getStyleId() {
                return t.useSharedStyleTag ? "board-styles-shared" : `board-styles-${t.id}`
            }
            function getLegacyStyleInnerHTML(t, r=!1) {
                let {boardStyle: n, id: i, pieceStyle: a} = t
                  , {path: s, format: l, isPseudo3d: d} = o[a] ?? P.TK.neo
                  , c = (0,
                E.U)(s, void 0, t)
                  , u = e[n] ?? P.Vq.green
                  , f = d ? "::after" : ""
                  , g = r ? P.Hk.reduce( (e, t) => `${e}#board-${i} .piece.${t}, #board-${i} .promotion-piece.${t} {
            background-image: url('${A.A[t]}');
          }`, "") : P.Hk.reduce( (e, t) => `${e}#board-${i} .piece.${t}${f}, #board-${i} .promotion-piece.${t}${f} {
            background-image: url('${c}/${t}.${l}');
          }`, "");
                return `
      #board-${i}, .fade-in-overlay {
        background-image: url('${(0,
                C.F)(u[2], void 0, t)}');
      }
      .coordinate-light {
        fill: ${u[0]};
      }
      .coordinate-dark {
        fill: ${u[1]};
      }
      .highlight {
        background-color: ${u[4]};
      }
    ` + g + `#board-${i}, #board-${i} .piece {
      ${b}
    }`
            }
            function getStyleInnerHTML(e, t=!1) {
                let {id: o, themeAssets: r} = e;
                if (!r)
                    return getLegacyStyleInnerHTML(e, t);
                let n = r.config.perspective === $.b.Perspective.PSEUDO_3D ? "::after" : ""
                  , i = Object.keys(r.pieces.assets).reduce( (e, t) => `${e}#board-${o} .piece.${t}${n}, #board-${o} .promotion-piece.${t}${n} {
        background-image: url('${r.pieces.assets[t]}');
      }`, "");
                return `
      #board-${o}, .fade-in-overlay {
        background-image: url('${r.board.assets.background}');
      }
      .coordinate-light {
        fill: ${r.board.config.lightSquareCoordinateHex};
      }
      .coordinate-dark {
        fill: ${r.board.config.darkSquareCoordinateHex};
      }
      .highlight {
        background-color: ${r.board.config.highlightSquareHex};
      }
    ` + i + `#board-${o}, #board-${o} .piece {
      ${b}
    }`
            }
            function updateStyles(e, t=!1) {
                let o = getStyleId()
                  , r = getStyleEl();
                if (!r) {
                    (r = document.createElement("style")).type = "text/css";
                    r.id = o;
                    let e = document.head;
                    e && e.appendChild(r)
                }
                let n = getStyleInnerHTML(e, t);
                if (r.innerHTML !== n) {
                    r.innerHTML = n;
                    setTimeout( () => {
                        r && (r.innerHTML = r.innerHTML.replace(b, ""))
                    }
                    , w + 50)
                }
            }
        }
        var H = o(96446)
          , k = o(49413);
        function createAssetsMethods({boardStyles: e, el: t, options: o, pieceStyles: n}) {
            let i = createStyleDOM({
                boardStyles: e,
                options: o,
                pieceStyles: n
            });
            return {
                destroy,
                updateBoardImage,
                updatePieceBaseImage,
                togglePseudo3d,
                getPieceStyles: i.getPieceStyles
            };
            function destroy() {
                i.destroy()
            }
            function updateBoardImage(e) {
                i.updateStyles((0,
                H.PM)(e.options))
            }
            function updatePieceBaseImage(e, t=!1) {
                togglePseudo3d(e.options);
                i.updateStyles((0,
                H.PM)(e.options), t)
            }
            function togglePseudo3d(e) {
                let o = (0,
                k.C)(e, n);
                t.classList.toggle(r.vv.Pseudo3d, o)
            }
        }
        var q = o(57536)
          , M = o(70994);
        function createExternallyResolvablePromise() {
            let e, t;
            return {
                promise: new Promise( (o, r) => {
                    e = o;
                    t = r
                }
                ),
                reject: t,
                resolve: e
            }
        }
        var B = o(13410)
          , D = o(45659);
        function createBoard({el: e, options: t, testElement: o=M.mm.Board}) {
            var n;
            let a = {
                [i.R.Coordinates]: document.createComment("/Coordinates"),
                [i.R.Squares]: document.createComment("/Squares"),
                [i.R.BlinkingHighlights]: document.createComment("/Blinking Highlights"),
                [i.R.Effects]: document.createComment("/Effects"),
                [i.R.HoverSquare]: document.createComment("/Hover Square"),
                [i.R.Pieces]: document.createComment("/Pieces"),
                [i.R.MoveHints]: document.createComment("/MoveHints"),
                [i.R.CaptureHints]: document.createComment("/Capture Hints"),
                [i.R.Arrows]: document.createComment("/Arrows"),
                [i.R.PromotionWindow]: document.createComment("/Promotion Window"),
                [i.R.FadeSetup]: document.createComment("/Fade Setup")
            };
            Object.values(a).forEach(t => e.appendChild(t));
            let s = createExternallyResolvablePromise();
            null == (n = s.resolve) || n.call(s, !0);
            t.test && (0,
            M.P_)(e, {
                [M.fd.Element]: o
            });
            return {
                addToDom,
                animationComplete,
                el: e,
                flipBoard,
                setBoardEnabled,
                isAnimating,
                isFlipped,
                placeholders: a,
                setAnimatingStatus,
                reset
            };
            function addToDom({type: t, el: o, insertAfter: r=!1}) {
                r ? e.insertBefore(o, a[t].nextSibling) : e.insertBefore(o, a[t])
            }
            function flipBoard(t, o) {
                e.classList.toggle(r.vv.Flipped, t);
                if (null == o ? void 0 : o.options.allowMarkings) {
                    let e = o.api.markings.getAllWhere({
                        types: [q.kx]
                    });
                    e.length > 0 && updateTuckedEffects(e, o.renderer)
                }
            }
            function reset() {
                e.innerHTML = "";
                e.classList.remove(r.vv.Flipped)
            }
            function updateTuckedEffects(t, o) {
                t.forEach(t => {
                    var r;
                    let {data: {square: n}, key: i} = t
                      , a = null == (r = null == o ? void 0 : o.getEffectElements) ? void 0 : r.call(o).get(i);
                    if (a) {
                        a.forEach(e => {
                            if (e.classList.contains("tuck-right") || e.classList.contains("tuck-top")) {
                                e.classList.remove("tuck-right");
                                e.classList.remove("tuck-top")
                            }
                        }
                        );
                        (0,
                        B.Z)(n) && a.forEach(t => {
                            (0,
                            D.k)({
                                square: n,
                                isFlipped: e.classList.contains("flipped"),
                                effectEl: t
                            })
                        }
                        )
                    }
                }
                )
            }
            function setBoardEnabled() {}
            function isAnimating() {
                return !!e.dataset.testAnimating
            }
            function animationComplete(e) {
                return [r.aP.All, r.aP.Move].includes(e) ? s.promise : Promise.resolve(!0)
            }
            function isFlipped() {
                return t.flipped
            }
            function setAnimatingStatus(t) {
                var o;
                if (t) {
                    e.dataset.testAnimating = "true";
                    s = createExternallyResolvablePromise()
                } else {
                    delete e.dataset.testAnimating;
                    null == (o = s.resolve) || o.call(s, !0)
                }
            }
        }
        var T = o(55086);
        function getTextChar(e) {
            let t = ["8", "7", "6", "5", "4", "3", "2", "1", "a", "b", "c", "d", "e", "f", "g", "h"];
            return e ? [...t.slice(0, 8).reverse(), ...t.slice(-8).reverse()] : t
        }
        function getCoordinates(e) {
            return e === T.b.CoordinatesPositions.Outside ? [{
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 3.5
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 16
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 28.5
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 41
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 53.5
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 66
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 78.5
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 2,
                y: 91
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 10.35,
                y: 99.25
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 22.85,
                y: 99.25
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 35.35,
                y: 99.25
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 47.85,
                y: 99.25
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 60.35,
                y: 99.25
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 72.85,
                y: 99.25
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 85.35,
                y: 99.25
            }, {
                color: "grey",
                fontSize: 3.1,
                x: 97.85,
                y: 99.25
            }] : [{
                color: "light",
                fontSize: 2.8,
                x: .75,
                y: 3.5
            }, {
                color: "dark",
                fontSize: 2.8,
                x: .75,
                y: 15.75
            }, {
                color: "light",
                fontSize: 2.8,
                x: .75,
                y: 28.25
            }, {
                color: "dark",
                fontSize: 2.8,
                x: .75,
                y: 40.75
            }, {
                color: "light",
                fontSize: 2.8,
                x: .75,
                y: 53.25
            }, {
                color: "dark",
                fontSize: 2.8,
                x: .75,
                y: 65.75
            }, {
                color: "light",
                fontSize: 2.8,
                x: .75,
                y: 78.25
            }, {
                color: "dark",
                fontSize: 2.8,
                x: .75,
                y: 90.75
            }, {
                color: "dark",
                fontSize: 2.8,
                x: 10,
                y: 99
            }, {
                color: "light",
                fontSize: 2.8,
                x: 22.5,
                y: 99
            }, {
                color: "dark",
                fontSize: 2.8,
                x: 35,
                y: 99
            }, {
                color: "light",
                fontSize: 2.8,
                x: 47.5,
                y: 99
            }, {
                color: "dark",
                fontSize: 2.8,
                x: 60,
                y: 99
            }, {
                color: "light",
                fontSize: 2.8,
                x: 72.5,
                y: 99
            }, {
                color: "dark",
                fontSize: 2.8,
                x: 85,
                y: 99
            }, {
                color: "light",
                fontSize: 2.8,
                x: 97.5,
                y: 99
            }]
        }
        function getTextNodes(e, t) {
            let o = getTextChar(t)
              , r = getCoordinates(e);
            return e === T.b.CoordinatesPositions.EachSquare ? getEachSquareNodes(t) : r.map( (e, t) => ({
                ...e,
                text: o[t]
            })).map(e => `<text 
          x="${e.x}" 
          y="${e.y}" 
          ${e.fontSize ? `font-size="${e.fontSize}"` : ""} 
          class="coordinate-${e.color}">${e.text}</text>`).join("")
        }
        function getEachSquareNodes(e) {
            let t = ["a", "b", "c", "d", "e", "f", "g", "h"]
              , o = ["1", "2", "3", "4", "5", "6", "7", "8"]
              , r = e ? [...t].reverse() : t
              , n = e ? o : [...o].reverse()
              , i = 12.5;
            return n.map( (e, t) => r.map( (o, r) => `<text 
          x="${.94 * i + i * r}" 
          y="${.92 * i + i * t}" 
          font-size="2.8"
          text-anchor="end"
          class="coordinate-${(t + r) % 2 != 0 ? "dark" : "light"}">${o}${e}</text>`)).flatMap(e => e).join(" ")
        }
        function createCoordinatesMethods({board: e, options: t}) {
            return {
                setCoordinates
            };
            function addCoordinates(o, r) {
                let n = createCoordinates(o, r, t);
                e.addToDom({
                    el: n,
                    type: i.R.Coordinates
                })
            }
            function setCoordinates({flipped: e, position: t}) {
                removeCoordinates();
                t !== T.b.CoordinatesPositions.Off && addCoordinates(t, e)
            }
            function removeCoordinates() {
                let t = e.el.querySelector(".coordinates");
                t && t.parentNode.removeChild(t)
            }
        }
        function createCoordinates(e, t, o, r) {
            let n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return n.setAttribute("viewBox", "0 0 100 100"),
            n.classList.add("coordinates"),
            e === T.b.CoordinatesPositions.Outside && n.classList.add("outside"),
            e === T.b.CoordinatesPositions.EachSquare && n.classList.add("each-square"),
            o.test && (0,
            M.P_)(n, {
                [M.fd.Element]: M.mm.Coordinates,
                [M.fd.Flipped]: t.toString(),
                [M.fd.Position]: e
            }),
            n.innerHTML = "",
            r && (n.innerHTML += r),
            n.innerHTML += getTextNodes(e, t),
            n
        }
        function createFadeSetupMethods({board: e}) {
            let t;
            return {
                fadeSetup
            };
            function createFadeInOverlay(o) {
                (t = document.createElement("div")).classList.add("fade-in-overlay");
                e.addToDom({
                    el: t,
                    type: i.R.FadeSetup
                });
                t.addEventListener("animationend", removeAnimation);
                o.test && (0,
                M.P_)(t, {
                    [M.fd.Element]: M.mm.FadeInOverlay
                })
            }
            function removeAnimation() {
                if (t) {
                    t.style.animationDuration = "";
                    t.classList.remove("animate")
                }
            }
            function removeFadeInOverlay() {
                t && t.remove();
                t = void 0
            }
            function fadeSetup({options: e}) {
                if (0 === e.fadeSetup) {
                    t && removeFadeInOverlay();
                    return
                }
                t || createFadeInOverlay(e);
                if (t) {
                    t.style.animationDuration = `${e.fadeSetup / 1e3}s`;
                    t.classList.add("animate")
                }
            }
        }
        var L = o(60527);
        function createHoverSquareMethods({board: e, options: t}) {
            let o;
            let r = createHoverSquareEl();
            return {
                hideHoverSquare,
                showHoverSquare
            };
            function showHoverSquare(e) {
                if (o !== e) {
                    r.style.visibility = "";
                    t.test && (0,
                    M.P_)(r, {
                        [M.fd.Element]: M.mm.HoverSquare
                    });
                    (0,
                    L.a)({
                        el: r,
                        square: e
                    });
                    o = e
                }
            }
            function hideHoverSquare() {
                if (r) {
                    r.style.visibility = "hidden";
                    o = void 0
                }
            }
            function createHoverSquareEl() {
                let o = document.createElement("div")
                  , r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return r.setAttribute("viewBox", "0 0 100 100"),
                r.innerHTML = '<rect x="0" y="0" width="100" height="100" stroke="rgba(255, 255, 255, 0.65)" stroke-width="10" fill="none"/>',
                o.append(r),
                o.classList.add("hover-square"),
                o.style.visibility = "hidden",
                e.addToDom({
                    el: o,
                    type: i.R.HoverSquare
                }),
                t.test && (0,
                M.P_)(o, {
                    [M.fd.Element]: M.mm.HoverSquare
                }),
                o
            }
        }
        function createMoveHintsMethods({board: e}) {
            let t = {};
            return {
                addCaptureHints,
                addMoveHints,
                removeHints
            };
            function addMoveHints(o) {
                o.forEach(o => {
                    if (!t[o]) {
                        t[o] = createHintFromSquare(o);
                        e.addToDom({
                            el: t[o],
                            type: i.R.MoveHints
                        })
                    }
                }
                )
            }
            function addCaptureHints(o) {
                o.forEach(o => {
                    t[o] && removeHint(o);
                    t[o] = createHintFromSquare(o, {
                        isPotentialCapture: !0
                    });
                    e.addToDom({
                        el: t[o],
                        type: i.R.CaptureHints
                    });
                    t[o].style.borderWidth = `${.1 * t[o].clientWidth}px`
                }
                )
            }
            function removeHints(e) {
                e.forEach(removeHint)
            }
            function createHintFromSquare(e, t={}) {
                let o = document.createElement("div");
                return (0,
                M.P_)(o, {
                    [M.fd.Element]: t.isPotentialCapture ? M.mm.PotentialCapture : M.mm.Hint
                }),
                o.classList.add(t.isPotentialCapture ? "capture-hint" : "hint"),
                (0,
                L.a)({
                    el: o,
                    square: e
                }),
                o
            }
            function removeHint(e) {
                if (t[e]) {
                    t[e].parentNode.removeChild(t[e]);
                    delete t[e]
                }
            }
        }
        var F = o(17084)
          , I = o(93160);
        function createCheckBlinkingHighlight(e, t) {
            return {
                data: {
                    color: t,
                    interval: 500,
                    opacity: .5,
                    square: e,
                    times: 3
                },
                key: e,
                type: I.R
            }
        }
        var R = /* @__PURE__ */
        (e => (e[e.Slide = 0] = "Slide",
        e[e.FadeOut = 1] = "FadeOut",
        e))(R || {})
          , N = o(41946);
        function generateFadeOutSteps({animation: e, numSteps: t}) {
            return Array(t).fill(void 0).map( (o, r, n) => {
                let i;
                let a = 2.86 - (r + 1) / t * 2.86;
                return a = a > 1 ? 1 : a,
                r === n.length - 1 && e.callback && (i = e.callback),
                {
                    callback: i,
                    el: e.el,
                    style: {
                        opacity: a.toString()
                    }
                }
            }
            )
        }
        var z = o(65960);
        function getAbsoluteFileRankFromSan(e, t) {
            let o = (0,
            z.Z)(e);
            return t ? {
                file: 9 - o.file,
                rank: 9 - o.rank
            } : o
        }
        function getCoordsFromSquare(e, t) {
            let o = getAbsoluteFileRankFromSan(e, t);
            return {
                x: 100 * o.file - 100,
                y: (8 - o.rank) * 100
            }
        }
        function generateSlideSteps({animation: e, isFlipped: t=!1, numSteps: o}) {
            let {el: r, from: n, to: i} = e;
            if (!n || !i)
                return [];
            let a = getCoordsFromSquare(n, t)
              , s = getCoordsFromSquare(i, t);
            if (!a || !s)
                return [];
            let l = (s.x - a.x) / o
              , d = (s.y - a.y) / o;
            return Array(o).fill(void 0).map( (e, t) => {
                let n = t === o - 1
                  , i = n ? s : {
                    x: a.x + l * (t + 1),
                    y: a.y + d * (t + 1)
                };
                return {
                    el: r,
                    style: {
                        transform: n ? "" : `translate(${i.x}%, ${i.y}%)`,
                        zIndex: n ? "" : "10"
                    }
                }
            }
            )
        }
        function createAnimations(e) {
            let t;
            let o = []
              , r = {
                [R.FadeOut]: generateFadeOutSteps,
                [R.Slide]: generateSlideSteps
            };
            return {
                add,
                flush,
                run
            };
            function add(e, t) {
                let {animationType: n, flipped: i} = t
                  , a = Math.max(Math.floor(getDuration(n) / 16), 1);
                e.map(e => r[e.type]({
                    animation: e,
                    isFlipped: i || !1,
                    numSteps: a
                })).forEach(e => {
                    if (e.length > o.length) {
                        let t = Array(e.length - o.length).fill([]);
                        o.unshift(...t)
                    }
                    e.forEach( (e, t, r) => {
                        let n = r.length - t;
                        o[o.length - n] = [...o[o.length - n], e]
                    }
                    )
                }
                )
            }
            function flush() {
                if (0 === o.length) {
                    t = !0;
                    return
                }
                o.splice(0, o.length - 1);
                run()
            }
            function run() {
                t = o.length < 2;
                let r = o.shift();
                if (r) {
                    e.isAnimating() || e.setAnimatingStatus(!0);
                    r.forEach(e => {
                        Object.entries(e.style).forEach( ([t,o]) => {
                            e.el.style[t] = o
                        }
                        );
                        e.callback && e.callback()
                    }
                    );
                    0 === o.length && e.setAnimatingStatus(!1);
                    t || requestAnimationFrame( () => {
                        run()
                    }
                    )
                }
            }
        }
        function getDuration(e) {
            switch (e) {
            case T.b.Animation.Types.Slow:
                return T.b.Animation.Speeds.Slow;
            case T.b.Animation.Types.Fast:
                return T.b.Animation.Speeds.Fast;
            case T.b.Animation.Types.None:
                return 0;
            default:
                return T.b.Animation.Speeds.Default
            }
        }
        var O = o(47834);
        let W = "element-pool";
        function createElementPool({appendTo: e, elementType: t="div", insertBefore: o, startingCount: r=0}) {
            if (!e && !o)
                throw new N.V({
                    code: O.t.BadData,
                    message: 'When creating an element pool, you must provide an element to "appendTo" or "insertBefore".'
                });
            let n = Array(r).fill(void 0).map(createElement).map(hideElement);
            return {
                destroy,
                get,
                put
            };
            function createElement() {
                var r;
                let n = document.createElement(t);
                return n.className = W,
                e ? e.appendChild(n) : null == (r = null == o ? void 0 : o.parentNode) || r.insertBefore(n, o),
                n
            }
            function destroy() {
                n.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }
                );
                n.length = 0
            }
            function get() {
                return showElement(n.pop() || createElement())
            }
            function hideElement(e) {
                for (let t in e.dataset)
                    e.dataset[t] && (e.dataset[t] = "");
                return e.className = W,
                e.style.cssText = "",
                e
            }
            function put(e) {
                return hideElement(e),
                n.push(e),
                e
            }
            function showElement(e) {
                return e.className = "",
                e
            }
        }
        var _ = o(20847)
          , Z = /* @__PURE__ */
        (e => (e.Created = "Created",
        e.DetailsSet = "DetailsSet",
        e.DragEnded = "DragEnd",
        e.DragStarted = "DragStart",
        e.PieceShown = "PieceShown",
        e.PieceHidden = "PieceHidden",
        e.PositionSetBySquare = "PositionSetBySquare",
        e))(Z || {});
        function createPiece({details: e, el: t, emitter: o, test: r}) {
            let n;
            let i = {
                ...e
            };
            t.classList.add("piece");
            o.emit(Z.Created, {
                ...i
            });
            setDetails(i.color, i.type);
            setPositionBySquare$1(i.square);
            r && (0,
            M.P_)(t, {
                [M.fd.Element]: M.mm.Piece
            });
            return {
                el: t,
                getDetails,
                setDetails,
                setDraggingState,
                setPositionByCoords,
                setPositionBySquare: setPositionBySquare$1
            };
            function generateShortString(e, t) {
                return `${(0,
                _.e)(e)}${t}`
            }
            function getDetails() {
                return e
            }
            function setDetails(i, a) {
                t.classList.remove(n);
                n = generateShortString(i, a);
                t.classList.add(n);
                e.type = a;
                e.color = i;
                o.emit(Z.DetailsSet, {
                    ...e,
                    shortString: n
                });
                r && (0,
                M.P_)(t, {
                    [M.fd.Type]: a,
                    [M.fd.Color]: (0,
                    _.e)(i),
                    [M.fd.ShortString]: i === F.Z.ColorsAsNumbers.Black ? a : a.toUpperCase()
                })
            }
            function setDraggingState(n) {
                if (n) {
                    t.classList.add("dragging");
                    o.emit(Z.DragStarted, {
                        ...e
                    });
                    r && (0,
                    M.P_)(t, {
                        [M.fd.Dragging]: "true"
                    });
                    return
                }
                r && (0,
                M.P_)(t, {
                    [M.fd.Dragging]: void 0
                });
                t.classList.remove("dragging");
                o.emit(Z.DragEnded, {
                    ...e
                })
            }
            function setPositionBySquare$1(n, i) {
                if (r) {
                    let e = (0,
                    z.Z)(n);
                    if (!e)
                        return;
                    e && !i && (0,
                    M.P_)(t, {
                        [M.fd.File]: e.file.toString(),
                        [M.fd.Rank]: e.rank.toString(),
                        [M.fd.Square]: n
                    })
                }
                (0,
                L.a)({
                    el: t,
                    square: n
                });
                o.emit(Z.PositionSetBySquare, {
                    ...e
                })
            }
            function setPositionByCoords(e) {
                e && (t.style.transform = `translate(${e.x}%, ${e.y}%)`)
            }
        }
        var j = o(77457)
          , K = o(16080);
        function createPieces({board: e, emitter: t, options: o}) {
            let r;
            let n = createElementPool({
                insertBefore: e.placeholders.pieces,
                startingCount: 32
            })
              , i = createAnimations(e)
              , a = (0,
            j.N)();
            return {
                animations: i,
                create,
                destroy,
                get,
                getDraggingSquare,
                move,
                remove,
                setDraggingState,
                setPositionByCoords,
                setPositionBySquare,
                suspendOverSquare
            };
            function create(e) {
                let r = createPiece({
                    details: e,
                    el: n.get(),
                    emitter: t,
                    test: o.test
                });
                return a.set(e.square, r),
                t.emit(Z.PieceShown, {
                    ...a.get(e.square)
                }),
                r
            }
            function destroy() {
                n.destroy()
            }
            function get(e, t=!0) {
                if (!e)
                    return a;
                if (!a.isDefined(e) && t)
                    throw new N.V({
                        code: O.t.ElementNotFound,
                        data: {
                            square: e,
                            pieces: a.getCollection()
                        },
                        message: `Piece does not exist on [${e}].`
                    });
                return a.isDefined(e) ? a.get(e) : void 0
            }
            function getDraggingSquare() {
                return r
            }
            function move(e, t) {
                let o = Array.isArray(e) ? e : [e]
                  , r = o.filter(Boolean).map(e => (0,
                K.v)(e))
                  , n = o.filter(Boolean).map(e => get(e.from))
                  , s = [];
                o.forEach( (e, t) => {
                    if (!e)
                        throw new N.V({
                            code: O.t.ElementNotFound,
                            message: "Move object does not exist."
                        });
                    let o = (0,
                    K.v)(e);
                    if (o) {
                        n[t].setPositionBySquare(o);
                        e.animate && s.push({
                            el: n[t].el,
                            from: e.from,
                            to: o,
                            type: R.Slide
                        });
                        a.set(o, n[t]);
                        r.includes(e.from) || a.deleteItem(e.from);
                        e.promotion && a.get(o).setDetails(e.color, e.promotion)
                    }
                }
                );
                s.length && i.add(s, t)
            }
            function remove({animate: e, options: o, squares: s}) {
                let l = [];
                s.forEach(o => {
                    if (!a.isDefined(o))
                        return;
                    let r = get(o).el;
                    e ? l.push({
                        callback: removeElement,
                        el: get(o).el,
                        type: R.FadeOut
                    }) : removeElement();
                    a.deleteItem(o);
                    function removeElement() {
                        if (!r)
                            throw new N.V({
                                code: O.t.ElementNotFound,
                                data: {
                                    square: o
                                },
                                message: "Piece does not exist. Cannot remove."
                            });
                        n.put(r);
                        t.emit(Z.PieceHidden, o)
                    }
                }
                );
                l.length && i.add(l, o);
                r && !a.isDefined(r) && (r = void 0)
            }
            function setDraggingState(e, t) {
                if (!t || e !== r) {
                    get(e).setDraggingState(t);
                    r = t ? e : void 0
                }
            }
            function setPositionByCoords(e, t) {
                let o = get(e)
                  , r = getDraggingSquare();
                r && r !== e && setDraggingState(r, !1);
                o.setPositionByCoords(t)
            }
            function setPositionBySquare(e, t) {
                let o = get(e);
                if (t !== e) {
                    a.set(t, a.get(e));
                    a.deleteItem(e)
                }
                o.setPositionBySquare(t)
            }
            function suspendOverSquare(e, t) {
                get(e).setPositionBySquare(t, !0)
            }
        }
        var U = o(4062)
          , V = o(75285);
        function createPieceMovementMethods({board: e, emitter: t, options: o}) {
            let r = createPieces({
                board: e,
                emitter: t,
                options: o
            });
            return {
                destroy: r.destroy,
                dragPiece,
                dropPiece,
                illegalMove,
                loadPieces,
                makeMove,
                removePiece,
                undoMove
            };
            function dragPiece(e) {
                if (e) {
                    e.toSquare ? r.suspendOverSquare(e.square, e.toSquare) : e.coords && r.setPositionByCoords(e.square, e.coords);
                    r.setDraggingState(e.square, !0)
                }
            }
            function dropPiece() {
                let e = r.getDraggingSquare();
                if (e) {
                    r.setPositionBySquare(e, e);
                    r.setDraggingState(e, !1)
                }
            }
            function illegalMove(e, t) {
                if (e) {
                    let {renderer: r} = t;
                    null == r || r.blinkHighlights([createCheckBlinkingHighlight(e, o.checkBlinkingSquareColor)], t)
                }
            }
            function makeMove(e, t) {
                r.animations.flush();
                if (e.drop) {
                    r.create({
                        color: e.color,
                        square: (0,
                        K.v)(e),
                        type: e.piece
                    });
                    return
                }
                e.EPCapturedSquare ? r.remove({
                    animate: e.animate,
                    options: t.options,
                    squares: [e.EPCapturedSquare]
                }) : r.get(e.to, !1) && !(0,
                U.p)(e) && r.remove({
                    animate: e.animate,
                    options: t.options,
                    squares: [e.to]
                });
                let o = [e, e.rookMove].filter(Boolean);
                r.move(o, t.options);
                r.animations.run()
            }
            function loadPieces(e, t) {
                let o = e.pieces
                  , n = e.reloadAll;
                r.animations.flush();
                let i = o.keys()
                  , a = r.get().keys().filter(e => !i.includes(e));
                if (n) {
                    let e = Array.from("abcdefgh", e => Array.from("12345678", t => e + t)).flat();
                    r.remove({
                        options: t.options,
                        squares: e
                    })
                } else
                    r.remove({
                        options: t.options,
                        squares: a
                    });
                o.keys().forEach(e => {
                    let t = o.get(e)
                      , i = r.get(e, !1);
                    if (n || !i) {
                        r.create(t);
                        return
                    }
                    let {type: a, color: s} = i.getDetails();
                    (a !== t.type || s !== t.color) && i.setDetails(t.color, t.type)
                }
                );
                r.animations.run()
            }
            function removePiece(e, t) {
                r.remove({
                    options: t.options,
                    squares: [e]
                })
            }
            function undoMove(e, t) {
                r.animations.flush();
                if (e.drop) {
                    removePiece(e.to, t);
                    return
                }
                let {movedPieces: o, restoredPiece: n, promotedSquare: i} = (0,
                V.o)(e);
                r.move(o, t.options);
                n && r.create(n);
                if (i) {
                    let e = r.get(i)
                      , {color: t} = e.getDetails();
                    e.setDetails(t, F.Z.Piece.Types.Pawn)
                }
                r.animations.run()
            }
        }
        var G = o(32831)
          , X = o(15204)
          , Y = o(88370)
          , J = o(69953);
        function createPromotionWindowMethods({board: e, options: t}) {
            let o, r;
            let n = {
                b: void 0,
                n: void 0,
                q: void 0,
                r: void 0
            };
            return {
                closePromotionWindow,
                openPromotionWindow
            };
            function createPromotionWindow() {
                (o = document.createElement("div")).classList.add("promotion-window");
                t.test && (0,
                M.P_)(o, {
                    [M.fd.Element]: M.mm.PromotionWindow
                });
                e.addToDom({
                    el: o,
                    type: i.R.PromotionWindow
                })
            }
            function createCloseButton(e) {
                (r = document.createElement("i")).className = "close-button icon-font-chess x";
                t.test && (0,
                M.P_)(r, {
                    [M.fd.Element]: M.mm.PromotionCloseButton
                });
                o.appendChild(r);
                r.addEventListener(X.WP, t => {
                    t.stopPropagation();
                    e((0,
                    Y.e)(G.i.BoardEvents.PromotionAreaClosePointerdown))
                }
                )
            }
            function createPieces(e) {
                Object.keys(n).forEach(r => {
                    let i = document.createElement("div");
                    i.addEventListener(X.WP, t => {
                        t.stopPropagation();
                        if ((0,
                        J.v)(t)) {
                            e((0,
                            Y.e)(G.i.UserEvents.PointerdownRight));
                            return
                        }
                        e((0,
                        Y.e)(G.i.BoardEvents.PromotionPiecePointerdown, {
                            piece: r
                        }))
                    }
                    );
                    i.classList.add("promotion-piece");
                    n[r] = i;
                    t.test && (0,
                    M.P_)(n[r], {
                        [M.fd.Element]: M.mm.PromotionPiece,
                        [M.fd.Type]: r
                    });
                    o.appendChild(i)
                }
                )
            }
            function getPromotionWindowDetails({flipped: e, promotionMove: t}) {
                let o;
                return o = e ? t.color === F.Z.ColorsAsNumbers.White ? "bottom" : "top" : t.color === F.Z.ColorsAsNumbers.White ? "top" : "bottom",
                {
                    color: t.color,
                    file: (e ? "hgfedcba" : "abcdefgh").indexOf(t.to.slice(0, 1)) + 1,
                    position: o
                }
            }
            function openPromotionWindow(e, i) {
                let {options: {flipped: a}, run: s} = i
                  , {color: l, file: d, position: c} = getPromotionWindowDetails({
                    flipped: a,
                    promotionMove: e
                });
                o || createPromotionWindow();
                r || createCloseButton(s);
                n.q || createPieces(s);
                setPieceOrder(c);
                setPromotionWindowFile(d);
                setPieceColors(l);
                t.test && (0,
                M.P_)(o, {
                    [M.fd.Color]: (0,
                    _.e)(l),
                    [M.fd.File]: d.toString(),
                    [M.fd.Position]: c
                });
                showPromotionWindow()
            }
            function closePromotionWindow() {
                if (!o)
                    throw new N.V({
                        code: O.t.ElementNotFound,
                        message: "Promotion window does not exist."
                    });
                o.style.display = "none"
            }
            function setPieceColors(e) {
                Object.keys(n).forEach(o => {
                    n[o].className = `promotion-piece ${(0,
                    _.e)(e)}${o}`;
                    t.test && (0,
                    M.P_)(n[o], {
                        [M.fd.Color]: (0,
                        _.e)(e)
                    })
                }
                )
            }
            function setPieceOrder(e) {
                "top" === e ? o.classList.add("top") : o.classList.remove("top")
            }
            function setPromotionWindowFile(e) {
                o.style.transform = `translateX(${(e - 1) * 100}%`
            }
            function showPromotionWindow() {
                o.style.display = ""
            }
        }
        function createHighlightsMethods({board: e, options: t}) {
            let o = createElementPool({
                insertBefore: e.placeholders.squares,
                startingCount: 3
            })
              , r = (0,
            j.N)()
              , n = t.test;
            return {
                addHighlights,
                blinkHighlights,
                removeHighlights
            };
            function addHighlights(e) {
                e.forEach(e => {
                    let {square: t} = e.data;
                    if (r.isDefined(t) || !e)
                        return;
                    let o = createHighlightEl(t, e);
                    r.set(t, o)
                }
                )
            }
            function blinkHighlight({el: e, interval: t, opacity: o, times: r}) {
                let n = 0
                  , i = !0
                  , a = setInterval( () => {
                    n += 1;
                    if (n === 2 * r) {
                        clearInterval(a);
                        if (e) {
                            let t = e.parentNode;
                            t && t.removeChild(e)
                        }
                        return
                    }
                    if (i) {
                        e.style.opacity = "0";
                        i = !1
                    } else {
                        e.style.opacity = o.toString();
                        i = !0
                    }
                }
                , t / 2)
            }
            function blinkHighlights(t) {
                t.forEach(t => {
                    let {color: o, interval: r, opacity: a, square: s, times: l} = t.data
                      , d = createHighlightEl(s, t);
                    e.addToDom({
                        el: d,
                        type: i.R.BlinkingHighlights
                    });
                    n && (0,
                    M.P_)(d, {
                        [M.fd.Element]: M.mm.BlinkingHighlight,
                        [M.fd.Square]: s,
                        [M.fd.Color]: o,
                        [M.fd.Interval]: r,
                        [M.fd.Opacity]: a,
                        [M.fd.Times]: l,
                        [M.fd.Type]: M.fd.Blinking
                    });
                    blinkHighlight({
                        el: d,
                        interval: r,
                        opacity: a,
                        times: l
                    })
                }
                )
            }
            function removeHighlights(e) {
                e.forEach(removeHighlight)
            }
            function createHighlightEl(e, t) {
                let r = o.get();
                return (0,
                M.P_)(r, {
                    [M.fd.Element]: M.mm.Highlight
                }),
                r.classList.add("highlight"),
                updateHighlightElementStyles(r, t),
                (0,
                L.a)({
                    el: r,
                    square: e
                }),
                r
            }
            function removeHighlight(e) {
                let {square: t} = e.data;
                if (!r.isDefined(t))
                    return;
                let n = r.get(t);
                o.put(n);
                r.deleteItem(t)
            }
            function updateHighlightElementStyles(e, t) {
                if (!e)
                    throw new N.V({
                        code: O.t.ElementNotFound,
                        data: {
                            highlight: t
                        },
                        message: "Highlight does not exist."
                    });
                let {data: {color: o, opacity: r}} = t
                  , n = o || ""
                  , i = String(r);
                e.style.backgroundColor !== n && (e.style.backgroundColor = n);
                e.style.opacity !== i && (e.style.opacity = i)
            }
        }
        var Q = o(60590);
        function getCoordsInsideBoard(e) {
            let t = Math.max(e.x, -50);
            t = Math.min(t, 750);
            let o = Math.max(e.y, -50);
            return {
                x: t,
                y: o = Math.min(o, 750)
            }
        }
        function getSquareInsideBoard(e, t) {
            let o = Math.max(e, 1);
            o = Math.min(o, 8);
            let r = Math.max(t, 1);
            return r = Math.min(r, 8),
            (0,
            Q.H)({
                file: o,
                rank: r
            })
        }
        var ee = o(24561);
        function getPointerPosition({el: e, event: t, flipped: o}) {
            let r = e.getBoundingClientRect()
              , {x: n, y: i} = (0,
            ee.u)(t)
              , a = r.width / 8
              , s = {
                x: Math.round((n - r.left) % a),
                y: Math.round((i - r.top) % a)
            }
              , l = Math.ceil((n - r.left) / a)
              , d = Math.ceil((r.bottom - i) / a)
              , c = o ? 9 - l : l
              , u = o ? 9 - d : d
              , f = (0,
            Q.H)({
                file: c,
                rank: u
            })
              , g = {
                x: (n - r.left - a / 2) / r.width * 800,
                y: (i - r.top - a / 2) / r.height * 800
            }
              , m = getCoordsInsideBoard(g);
            return {
                coords: g,
                coordsInsideBoard: m,
                coordsInsideSquare: s,
                square: f,
                squareInsideBoard: getSquareInsideBoard(c, u)
            }
        }
        function getColorAsNumber(e) {
            return e === F.Z.ColorsAsLetters.Black || e === F.Z.ColorsAsWords.Black ? F.Z.ColorsAsNumbers.Black : F.Z.ColorsAsNumbers.White
        }
        function formatPiecesAsObject(e) {
            let t = {};
            return e.forEach(e => {
                let o = e.className.split(" ")
                  , r = o.find(e => e.startsWith("square-"))
                  , n = o.find(e => e.startsWith("w") || e.startsWith("b"));
                if (!r || !n)
                    return;
                let[i,a] = n
                  , s = parseInt(r[r.length - 2], 10)
                  , l = parseInt(r[r.length - 1], 10)
                  , d = (0,
                Q.H)({
                    file: s,
                    rank: l
                });
                d && (t[d] = {
                    color: getColorAsNumber(i),
                    type: a
                })
            }
            ),
            t
        }
        let {createEventEmitter: et} = o(50717).rG;
        function createDefaultRenderer({el: e, emitter: t=et(), options: o=(0,
        n.q)(), boardStyles: i=P.Vq, pieceStyles: a=P.TK, testElement: s}) {
            let l = createBoard({
                el: e,
                options: o,
                testElement: s
            })
              , d = {
                board: l,
                el: e,
                emitter: t,
                options: o
            }
              , c = createAssetsMethods({
                ...d,
                boardStyles: i,
                pieceStyles: a,
                options: (0,
                H.PM)(o)
            })
              , u = createPieceMovementMethods(d);
            l.isFlipped() && l.flipBoard(!0);
            c.togglePseudo3d(o);
            let f = {
                ...createAnalysisOverlayMethods(d),
                ...createArrowsMethods(d),
                ...c,
                ...createCoordinatesMethods(d),
                ...createFadeSetupMethods(d),
                ...createHoverSquareMethods(d),
                ...createMoveHintsMethods(d),
                ...createHighlightsMethods(d),
                ...createPromotionWindowMethods(d),
                ...u,
                animationComplete: l.animationComplete,
                areAssetsLoaded: () => !0,
                createRenderer: createDefaultRenderer,
                destroy,
                ...t,
                extendRenderer,
                flipBoard: l.flipBoard,
                setBoardEnabled: l.setBoardEnabled,
                getCoordsFromSquare: getCoordsFromSquare,
                getPieces,
                getPointerPosition: getPointerPosition,
                getRendererOptions: () => ({
                    boardStyles: i,
                    el: e,
                    options: o,
                    pieceStyles: a,
                    emitter: t
                }),
                getBoardContainerAspectRatio: () => 1,
                isAnimating: l.isAnimating,
                name: r.A4.Types.Default,
                resize
            };
            return f;
            function destroy() {
                c.destroy();
                u.destroy();
                l.reset()
            }
            function extendRenderer(e) {
                Object.assign(f, e(d))
            }
            function getPieces() {
                return formatPiecesAsObject(Array.from(e.querySelectorAll(".piece")))
            }
            function resize() {}
        }
    },
    19356: function(e, t, o) {
        o.d(t, {
            t: function() {
                return calculateArrowSlope
            }
        });
        function calculateArrowSlope({from: e, to: t}) {
            console.log("e = ",e)
            return Number(((e.y - t.y) / (e.x - t.x)).toFixed(1))
        }
    },
    37101: function(e, t, o) {
        o.d(t, {
            $: function() {
                return getKnightArrowRotation
            }
        });
        function getKnightArrowRotation({from: e, slope: t, to: o}) {
            switch (t) {
            case 2:
                return e.x > o.x ? 180 : 0;
            case -2:
                return e.x > o.x ? 0 : 180;
            case .5:
            case -.5:
                return e.x > o.x ? 90 : 270;
            default:
                return 0
            }
        }
    },
    60590: function(e, t, o) {
        o.d(t, {
            H: function() {
                return getSanFromFileRank
            }
        });
        function getSanFromFileRank(e) {
            return !e || !e.file || !e.rank || e.file > 8 || e.rank > 8 || e.file < 1 || e.rank < 1 ? null : `${String.fromCharCode(96 + e.file)}${e.rank.toString()}`
        }
    },
    96131: function(e, t, o) {
        o.d(t, {
            A: function() {
                return calculateArrowRotation
            }
        });
        var r = o(22276);
        function calculateArrowRotation({from: e, to: t}) {
            let o = (0,
            r.e)({
                from: e,
                to: t
            })
              , n = {
                x: e.x,
                y: e.y + o
            }
              , i = {
                x: e.x - n.x,
                y: e.y - n.y
            }
              , a = {
                x: e.x - t.x,
                y: e.y - t.y
            }
              , s = Math.floor(180 / Math.PI * Math.acos(Math.max(-1, Math.min(1, (i.x * a.x + i.y * a.y) / o ** 2))) * 100) / 100;
            return e.x < t.x ? 360 - s : s
        }
    },
    69454: function(e, t, o) {
        o.d(t, {
            j: function() {
                return getArrowColor
            }
        });
        var r = o(17084);
        function getArrowColor(e, t) {
            return (e && t[r.Z.Node.Marking.JCEColorsMap[e]]) ?? e ?? t.default
        }
    },
    75285: function(e, t, o) {
        o.d(t, {
            o: function() {
                return getUndoMoveDetails
            }
        });
        var r = o(49165)
          , n = o(16080);
        function getUndoMoveDetails(e) {
            let t = [{
                animate: e.animate,
                from: (0,
                n.v)(e),
                to: e.from
            }];
            e.rookMove && t.push({
                ...e.rookMove,
                from: e.rookMove.to,
                to: e.rookMove.from
            });
            let o = e.captured && e.capturedStr ? {
                color: (0,
                r.T)(e.color),
                promoted: e.capturedPromotedPawn,
                square: e.EPCapturedSquare || e.to,
                type: e.capturedStr.toLowerCase()
            } : void 0;
            return {
                movedPieces: t,
                promotedSquare: e.promotion ? e.from : void 0,
                restoredPiece: o
            }
        }
    },
    22276: function(e, t, o) {
        o.d(t, {
            e: function() {
                return calculateArrowLength
            }
        });
        function calculateArrowLength({from: e, to: t}) {
            return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2)
        }
    },
    20847: function(e, t, o) {
        o.d(t, {
            e: function() {
                return getColorAsLetter
            }
        });
        var r = o(17084);
        function getColorAsLetter(e) {
            return e === r.Z.ColorsAsNumbers.Black ? r.Z.ColorsAsLetters.Black : r.Z.ColorsAsLetters.White
        }
    },
    40501: function(e, t, o) {
        o.d(t, {
            BN: function() {
                return n
            },
            T6: function() {
                return i
            },
            Th: function() {
                return a
            },
            ox: function() {
                return r
            }
        });
        let r = {
            HEAD_HEIGHT: 4.5,
            HEAD_WIDTH: 6.5,
            TAIL_PADDING: 4.5,
            WIDTH: 2.75
        }
          , n = 27.95084971874737
          , i = [.5, -2]
          , a = [2, .5, -.5, -2]
    },
    24561: function(e, t, o) {
        o.d(t, {
            u: function() {
                return getXYFromEvent
            }
        });
        var r = o(15204);
        let n = -1
          , i = -1;
        function getXYFromEvent({clientX: e, clientY: t, pointer: o, type: a, touches: s}) {
            let l = a === r.BB.Touchmove || a === r.BB.Touchstart;
            if (l && s.length > 0) {
                n = s[0].clientX;
                i = s[0].clientY
            }
            return a === r.BB.Touchend ? {
                x: n,
                y: i
            } : o ? {
                x: o.x,
                y: o.y
            } : s && s.length > 0 ? {
                x: s[0].clientX,
                y: s[0].clientY
            } : {
                x: e ?? -1,
                y: t ?? -1
            }
        }
    },
    3342: function(e, t, o) {
        o.d(t, {
            F: function() {
                return getLegacyBoardURL
            }
        });
        var r = o(42589);
        function getLegacyBoardURL(e, t=150, o) {
            return `${(0,
            r.L)(o)}/boards/${e}/${t}.png`
        }
    }
}]);
