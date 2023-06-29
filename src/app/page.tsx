export default function Home() {
  return (
    <div style={{
      gridArea: "postContent / postContent / postContent / postContent",
      minWidth: 0,
      //
      boxSizing: "border-box",
    }}>
      <div>
        <div
          style={{
            minHeight: "21.75rem",

            //
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
            }}
          >
            <div
              dir="auto"
              data-presentation-mode="false"
              style={{
                boxSizing: "border-box",
              }}
            >
              <div
                contentEditable={false}
                translate="no"
                style={{
                  height: "100%",
                  overflowWrap: "break-word",
                  wordBreak: "keep-all",
                  hyphens: "auto",
                  //
                  position: "relative",
                }}
              >
                <p>
                  <p> {"span > div > figure > div > video 비디오 1"} </p>
                  <span />
                  <span>
                    <div>
                      <figure
                        style={{
                          width: "100%",
                          position: "relative",
                          display: "inline-block",
                          paddingBottom: "56.25%",
                          overflow: "hidden",
                          outline: "none",
                          //
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            //
                            boxSizing: "border-box",
                          }}
                        >
                          <video
                            width="100%"
                            height="100%"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              //
                              pointerEvents: "auto",
                            }}
                            controls
                            src="https://media.fmkorea.com/files/attach/new3/20230629/486616/4799060287/5918201749/8d7da534ce2661fe44fa3118d6e3e689.mp4"
                          />
                        </div>
                      </figure>
                    </div>
                  </span>
                  <p> {"span > div > figure > div > video 비디오 2"} </p>
                  <span />
                  <span>
                    <div>
                      <figure>
                        <div>
                          <video
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                            }}
                            controls
                            src="https://media.fmkorea.com/files/attach/new3/20230629/486616/4799060287/5918201749/8d7da534ce2661fe44fa3118d6e3e689.mp4"
                          />
                        </div>
                      </figure>
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
