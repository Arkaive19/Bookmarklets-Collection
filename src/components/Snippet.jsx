import React from "react";
import Clr from "./Clr";
import { ToastContainer, toast } from 'react-toastify';

const Snippet = ({ name }) => {
    const colors = {            
        vsDarkBlue:"#569cd6",
        vsLabel: "#909397",
        vsGold: "#ffce0b",
        vsPurple: "#b780be",
        vsDeepBlue: "#4f93d0",
        vsOperator:"#b8b5b8",
        vsText:"#9cd9f8",
        vsVariable:"#4fc1f1",
        vsMethod:"#dcdcaa",
        vsNumber:"#b5cea8",
        vsString:"#c4805b",
        vsRegex:"#cb6769",
        vsStringLit:"#d7ba6e",

       }

    const codeSnippets = {
        editable: `javascript: (() => {
        window.__editableToggleCount = window.__editableToggleCount || 0;
        const body = document.querySelector("body");
        if (window.__editableToggleCount % 2 === 0) {
          body.contentEditable = "true";
        } else {
          body.contentEditable = "false";
        }
        window.__editableToggleCount++;
      })();`,
      hitboxes:  "javascript:(() => {" +
      "  const id = 'hbx';" +
      "  const existingStyle = document.getElementById(id);" +
      "  if (existingStyle) {" +
      "    existingStyle.remove();" +
      "  } else {" +
      "    const color = prompt('Outline color?');" +
      "    if (!color) return;" +
      "    const style = document.createElement('style');" +
      "    style.id = id;" +
      "    style.textContent = '* { outline: 2px solid ' + color + ' !important; }';" +
      "    document.head.appendChild(style);" +
      "  }" +
      "})();",
      invert_page_color: `javascript:(function(){
        const styleId = 'invert-colors-style';
        let style = document.getElementById(styleId);
        if(style){
          style.remove();
        } else {
          style = document.createElement('style');
          style.id = styleId;
          style.textContent = \`
            html {
              filter: invert(1) hue-rotate(180deg);
              background: black !important;
            }
            img, video, iframe, picture, svg {
              filter: invert(1) hue-rotate(180deg) !important;
            }
          \`;
          document.head.appendChild(style);
        }
      })();`,
      clear_cache_with_out_reset: `javascript:(() => {
        localStorage.clear();
        sessionStorage.clear();
        if ('caches' in window) {
          caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
        }
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then((regs) => {
            regs.forEach((reg) => reg.unregister());
          });
        }
        console.log("✅ Cache, localStorage, sessionStorage, and service workers cleared (no reload).");
      })();`,
      text_stats: `javascript:(() => {
        const text = window.getSelection().toString().trim();
        if (!text) return alert("⚠️ No text selected.");
        const words = text.split(/\\s+/).filter(w => w.length > 0).length;
        const chars = text.length;
        const sents = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        alert(
          \`From Selected Text:\\nWord Count  : \${words}\\nCharacter Count: \${chars}\\nSentence Count: \${sents}\`
        );
      })();`,
      
      
    }

    const snippets = {
        editable: (
          <>
            <Clr color={colors.vsText} os={1}>{"window"}</Clr>
            <Clr color={colors.vsOperator}>{`.`}</Clr>
            <Clr color={colors.vsText}>{`et`}</Clr>
            <Clr color={colors.vsOperator}>{` = `}</Clr>
            <Clr color={colors.vsDeepBlue}>{`(`}</Clr>
            <Clr color={colors.vsText}>{"window"}</Clr>
            <Clr color={colors.vsOperator}>{`.`}</Clr>
            <Clr color={colors.vsText}>{`et `}</Clr>
            <Clr color={colors.vsOperator}>{"|| "}</Clr>
            <Clr color={colors.vsNumber}>{`0`}</Clr>
            <Clr color={colors.vsDeepBlue}>{`) `}</Clr>
            <Clr color={colors.vsOperator}>{`+ `}</Clr>
            <Clr color={colors.vsNumber}>{`1`}</Clr>
            <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
            <Clr color={colors.vsDarkBlue} os={1}>{`const `}</Clr>
            <Clr color={colors.vsVariable}>{`body`}</Clr>
            <Clr color={colors.vsOperator}>{` = `}</Clr>
            <Clr color={colors.vsText}>{"document"}</Clr>
            <Clr color={colors.vsOperator}>{"."}</Clr>
            <Clr color={colors.vsMethod}>{`body`}</Clr>
            <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
            <Clr color={colors.vsVariable} os={1}>{"body"}</Clr>
            <Clr color={colors.vsOperator}>{"."}</Clr>
            <Clr color={colors.vsMethod}>{`contentEditable`}</Clr>
            <Clr color={colors.vsOperator}>{` = `}</Clr>
            <Clr color={colors.vsText}>{"window"}</Clr>
            <Clr color={colors.vsOperator}>{"."}</Clr>
            <Clr color={colors.vsText}>{`et`}</Clr>
            <Clr color={colors.vsOperator}>{` % 2 ?`}</Clr>
            <Clr color={colors.vsString}>{` 'true'`}</Clr>
            <Clr color={colors.vsOperator}>{" : "}</Clr>
            <Clr color={colors.vsString}>{"'false'"}</Clr>
            <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
          </>
        ),
        hitboxes:<>
        <Clr color={colors.vsDeepBlue} os={1}>{`const `}</Clr>
        <Clr color={colors.vsVariable}>{`id`}</Clr>
        <Clr color={colors.vsOperator}>{` = `}</Clr>
        <Clr color={colors.vsString}>{`'hbx'`}</Clr>
        <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
        <Clr color={colors.vsDarkBlue} os={1}>{`const `}</Clr>
        <Clr color={colors.vsVariable}>{`existingStyle`}</Clr>
        <Clr color={colors.vsOperator}>{` = `}</Clr>
        <Clr color={colors.vsText}>{"document"}</Clr>
        <Clr color={colors.vsOperator}>{"."}</Clr>
        <Clr color={colors.vsMethod}>{`getElementById`}</Clr>
        <Clr color={colors.vsDeepBlue}>{`(`}</Clr>
        <Clr color={colors.vsText}>{`id`}</Clr>
        <Clr color={colors.vsDeepBlue}>{`)`}</Clr>
        <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
        <Clr br={true}></Clr>
        <Clr color={colors.vsPurple} os={1}>{`if `}</Clr>
        <Clr color={colors.vsDeepBlue}>{`(`}</Clr>
        <Clr color={colors.vsVariable}>{`existingStyle`}</Clr>
        <Clr color={colors.vsDeepBlue} br={true}>{`) {`}</Clr>
        <Clr color={colors.vsVariable} os={1}>{`existingStyle`}</Clr>
        <Clr color={colors.vsOperator}>{"."}</Clr>
        <Clr color={colors.vsMethod}>{'remove'}</Clr>
        <Clr color={colors.vsGold}>{'()'}</Clr>
        <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
        <Clr color={colors.vsDeepBlue} os={1}>{`}`}</Clr>
        <Clr color={colors.vsPurple}>{` else`}</Clr>
        <Clr color={colors.vsDeepBlue} br={true}>{' {'}</Clr>
        <Clr color={colors.vsDarkBlue} os={1}>{`const `}</Clr>
        <Clr color={colors.vsVariable}>{"color"}</Clr>
        <Clr color={colors.vsOperator}>{" = "}</Clr>
        <Clr color={colors.vsMethod}>{"prompt"}</Clr>
        <Clr color={colors.vsGold}>{'('}</Clr>
        <Clr color={colors.vsString}>{'"Outline color?"'}</Clr>
        <Clr color={colors.vsGold}>{')'}</Clr>
        <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
        <Clr color={colors.vsPurple} os={1}>{`if `}</Clr>
        <Clr color={colors.vsDeepBlue}>{`(`}</Clr>
        <Clr color={colors.vsOperator}>{'!'}</Clr>
        <Clr color={colors.vsVariable}>{`color`}</Clr>
        <Clr color={colors.vsDeepBlue}>{`) `}</Clr>
        <Clr color={colors.vsPurple}>{`return`}</Clr>
        <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
        <Clr br={true}></Clr>
        <Clr color={colors.vsDarkBlue} os={1}>{`const `}</Clr>
        <Clr color={colors.vsVariable}>{`style`}</Clr>
        <Clr color={colors.vsOperator}>{` = `}</Clr>
        <Clr color={colors.vsText}>{"document"}</Clr>
        <Clr color={colors.vsOperator}>{"."}</Clr>
        <Clr color={colors.vsMethod}>{`createElement`}</Clr>
        <Clr color={colors.vsDeepBlue}>{`(`}</Clr>
        <Clr color={colors.vsText}>{`"style"`}</Clr>
        <Clr color={colors.vsDeepBlue}>{`)`}</Clr>
        <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
        <Clr color={colors.vsVariable} os={1}>{`style`}</Clr>
        <Clr color={colors.vsOperator}>{'.'}</Clr>
        <Clr color={colors.vsText}>{'id'}</Clr>
        <Clr color={colors.vsOperator}>{' = '}</Clr>
        <Clr color={colors.vsVariable}>{`id`}</Clr>
        <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
        <Clr color={colors.vsVariable} os={1}>{`style`}</Clr>
        <Clr color={colors.vsOperator}>{'.'}</Clr>
        <Clr color={colors.vsText}>{'textContent'}</Clr>
        <Clr color={colors.vsOperator}>{' = '}</Clr>
        <Clr color={colors.vsString} br={true}>{"`"}</Clr>
        <Clr color={colors.vsString} os={1.5}>{"* { outline: 2px solid "}</Clr>
        <Clr color={colors.vsGold}>{"${"}</Clr>
        <Clr color={colors.vsVariable}>{`color`}</Clr>
        <Clr color={colors.vsGold}>{"}"}</Clr>
        <Clr color={colors.vsString}>{" !important; }`"}</Clr>
        <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
        <Clr color={colors.vsText} os={1}>{"document"}</Clr>
        <Clr color={colors.vsOperator}>{"."}</Clr>
        <Clr color={colors.vsVariable}>{`head`}</Clr>
        <Clr color={colors.vsOperator}>{"."}</Clr>
        <Clr color={colors.vsMethod}>{`appendChild`}</Clr>
        <Clr color={colors.vsGold}>{`(`}</Clr>
        <Clr color={colors.vsVariable}>{`style`}</Clr>
        <Clr color={colors.vsGold}>{`)`}</Clr>
        <Clr color={colors.vsOperator} br={true}>{`;`}</Clr>
        <Clr color={colors.vsDeepBlue} os={1} br={true}>{`}`}</Clr>
        </>,
        invert_page_color: (
            <>
              <Clr color={colors.vsDarkBlue} os={1}>const </Clr>
              <Clr color={colors.vsVariable}>styleId</Clr>
              <Clr color={colors.vsOperator}> = </Clr>
              <Clr color={colors.vsString}>'invert-colors-style'</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
          
              <Clr color={colors.vsDarkBlue} os={1}>let </Clr>
              <Clr color={colors.vsVariable}>style</Clr>
              <Clr color={colors.vsOperator}> = </Clr>
              <Clr color={colors.vsText}>document</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>getElementById</Clr>
              <Clr color={colors.vsGold}>(</Clr>
              <Clr color={colors.vsVariable}>styleId</Clr>
              <Clr color={colors.vsGold}>)</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
          
              <Clr color={colors.vsPurple} os={1}>if </Clr>
              <Clr color={colors.vsDeepBlue}>(</Clr>
              <Clr color={colors.vsVariable}>style</Clr>
              <Clr color={colors.vsDeepBlue}>)</Clr>
              <Clr color={colors.vsDeepBlue} br={true}> {'{'} </Clr>
              <Clr color={colors.vsVariable} os={1.3}>style</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>remove</Clr>
              <Clr color={colors.vsGold}>()</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
              <Clr color={colors.vsDeepBlue} os={1}> {'}'} </Clr>
              <Clr color={colors.vsPurple}>else </Clr>
              <Clr color={colors.vsDeepBlue} br={true}>{'{'}</Clr>
          
              <Clr color={colors.vsVariable} os={1.3}>{"style"}</Clr>
              <Clr color={colors.vsOperator}> = </Clr>
              <Clr color={colors.vsText}>document</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>createElement</Clr>
              <Clr color={colors.vsGold}>(</Clr>
              <Clr color={colors.vsString}>'style'</Clr>
              <Clr color={colors.vsGold}>)</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
          
              <Clr color={colors.vsVariable} os={1.3}>style</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsVariable}>id</Clr>
              <Clr color={colors.vsOperator}> = </Clr>
              <Clr color={colors.vsVariable}>styleId</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
          
              <Clr color={colors.vsVariable} os={1.3}>style</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsText}>textContent</Clr>
              <Clr color={colors.vsOperator}> = </Clr>
              <Clr color={colors.vsString}>`</Clr><br />
              <Clr color={colors.vsString} os={1.5}>
                html &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filter: invert(1) hue-rotate(180deg);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: black !important;<br />
                &nbsp;&nbsp;&nbsp; &#125;<br />
                &nbsp;&nbsp;&nbsp;img, video, iframe, picture, svg &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filter: invert(1) hue-rotate(180deg) !important;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              </Clr><br />
              <Clr color={colors.vsString} os={1}>`</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
          
              <Clr color={colors.vsText} os={1}>document</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsVariable}>head</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>appendChild</Clr>
              <Clr color={colors.vsGold}>(</Clr>
              <Clr color={colors.vsVariable}>style</Clr>
              <Clr color={colors.vsGold}>)</Clr>
              <Clr color={colors.vsOperator}>;</Clr><br />
              <Clr color={colors.vsDeepBlue} br={true} os={1}>{"}"}</Clr>
            </>
          ),
          clear_cache_with_out_reset: (
            <>
              <Clr color={colors.vsText} os={1}>localStorage</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>clear</Clr>
              <Clr color={colors.vsGold}>(</Clr>
              <Clr color={colors.vsGold}>)</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
              <Clr color={colors.vsText} os={1}>sessionStorage</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>clear</Clr>
              <Clr color={colors.vsGold}>(</Clr>
              <Clr color={colors.vsGold}>)</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
              <Clr color={colors.vsPurple} os={1}>if </Clr>
              <Clr color={colors.vsDeepBlue}>(</Clr>
              <Clr color={colors.vsString}>"caches"</Clr>
              <Clr color={colors.vsDarkBlue}> in </Clr>
              <Clr color={colors.vsText}>window</Clr>
              <Clr color={colors.vsDeepBlue}>)</Clr>
              <Clr color={colors.vsDeepBlue} br={true}> {'{'} </Clr>
              <Clr color={colors.vsText} os={1.5}>{'caches'}</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>keys</Clr>
              <Clr color={colors.vsGold}>(</Clr>
              <Clr color={colors.vsGold}>)</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>then</Clr>
              <Clr color={colors.vsGold}>{'('}</Clr>
              <Clr color={colors.vsPurple}>{'('}</Clr>
              <Clr color={colors.vsText}>keys</Clr>
              <Clr color={colors.vsPurple}>{')'}</Clr>
              <Clr color={colors.vsDeepBlue}>{' => '}</Clr>
              <Clr color={colors.vsText}>{'keys'}</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>forEach</Clr>
              <Clr color={colors.vsPurple}>{'('}</Clr>
              <Clr color={colors.vsDeepBlue}>{'('}</Clr>
              <Clr color={colors.vsText}>key</Clr>
              <Clr color={colors.vsDeepBlue}>{')'}</Clr>
              <Clr color={colors.vsDeepBlue}>{' => '}</Clr>
              <Clr color={colors.vsText}>{' caches'}</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>delete</Clr>
              <Clr color={colors.vsDeepBlue}>{'('}</Clr>
              <Clr color={colors.vsText}>key</Clr>
              <Clr color={colors.vsDeepBlue}>{')'}</Clr>
              <Clr color={colors.vsPurple}>{')'}</Clr>
              <Clr color={colors.vsGold}>{')'}</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
              <Clr color={colors.vsDeepBlue} br={true} os={1}>{'}'}</Clr>
              <Clr color={colors.vsPurple} os={1}>if </Clr>
              <Clr color={colors.vsDeepBlue}>(</Clr>
              <Clr color={colors.vsString}>"serviceWorker"</Clr>
              <Clr color={colors.vsDarkBlue}> in </Clr>
              <Clr color={colors.vsText}>navigator</Clr>
              <Clr color={colors.vsDeepBlue}>)</Clr>
              <Clr color={colors.vsDeepBlue} br={true}> {'{'} </Clr>
              <Clr color={colors.vsText} os={1.5}>navigator</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsVariable}>serviceWorker</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>getRegistrations</Clr>
              <Clr color={colors.vsGold}>(</Clr>
              <Clr color={colors.vsGold}>)</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>then</Clr>
              <Clr color={colors.vsGold}>{'('}</Clr>
              <Clr color={colors.vsPurple}>{'('}</Clr>
              <Clr color={colors.vsText}>regs</Clr>
              <Clr color={colors.vsPurple}>{')'}</Clr>
              <Clr color={colors.vsDeepBlue}>{' => '}</Clr>
              <Clr color={colors.vsPurple} br={true}>{'{'}</Clr>
              <Clr color={colors.vsText} os={1.5}>regs</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>forEach</Clr>
              <Clr color={colors.vsDeepBlue}>{'('}</Clr>
              <Clr color={colors.vsGold}>{'('}</Clr>
              <Clr color={colors.vsText}>regs</Clr>
              <Clr color={colors.vsGold}>{')'}</Clr>
              <Clr color={colors.vsDeepBlue}>{' => '}</Clr>
              <Clr color={colors.vsText}>{'regs'}</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>unregister</Clr>
              <Clr color={colors.vsGold}>{'()'}</Clr>
              <Clr color={colors.vsDeepBlue}>{')'}</Clr>
              <Clr color={colors.vsOperator} br={true}>;</Clr>
              <Clr color={colors.vsPurple} os={1}>{'}'}</Clr>
              <Clr color={colors.vsGold}>{')'}</Clr>
              <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
              <Clr color={colors.vsText} os={1}>console</Clr>
              <Clr color={colors.vsOperator}>.</Clr>
              <Clr color={colors.vsMethod}>log</Clr>
              <Clr color={colors.vsDeepBlue} br={true}>{'('}</Clr>
              <Clr color={colors.vsString} os={1.5} br={true}>
                "✅ Cache, localStorage, sessionStorage, and service workers cleared (no reload)."
              </Clr>
              <Clr color={colors.vsDeepBlue} os={1}>{')'}</Clr>
              <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
             
            </>
          ),
          text_stats: (
            <>
         <Clr color={colors.vsDarkBlue} os={1}>const </Clr>
         <Clr color={colors.vsVariable} >text</Clr>
         <Clr color={colors.vsOperator}>{' = '}</Clr>
         <Clr color={colors.vsText} >window</Clr>
         <Clr color={colors.vsOperator}>.</Clr>
         <Clr color={colors.vsMethod}>getSelection</Clr>
         <Clr color={colors.vsDeepBlue}>{'()'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsMethod}>toString</Clr>
         <Clr color={colors.vsDeepBlue}>{'()'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsMethod}>trim</Clr>
         <Clr color={colors.vsDeepBlue}>{'()'}</Clr>  
         <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
         <Clr color={colors.vsPurple} os={1}>{'if '}</Clr>
         <Clr color={colors.vsDeepBlue}>{'('}</Clr>
         <Clr color={colors.vsOperator}>!</Clr>
         <Clr color={colors.vsVariable}>text</Clr>
         <Clr color={colors.vsDeepBlue}>{')'}</Clr>
         <Clr color={colors.vsPurple}>{'  return'} </Clr>
         <Clr color={colors.vsMethod}>{'alert'}</Clr>
         <Clr color={colors.vsDeepBlue}>{'('}</Clr>
         <Clr color={colors.vsString}>{'"⚠️ No text selected."'}</Clr>
         <Clr color={colors.vsDeepBlue}>{')'}</Clr>
         <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
         <Clr color={colors.vsDarkBlue} os={1}>const </Clr>
         <Clr color={colors.vsVariable} >words</Clr>
         <Clr color={colors.vsOperator}>{' = '}</Clr>
         <Clr color={colors.vsVariable}>{'text'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsMethod}>{'split'}</Clr>
         <Clr color={colors.vsDeepBlue}>{'('}</Clr>
         <Clr color={colors.vsRegex}>{'/'}</Clr>
         <Clr color={colors.vsRegex}>\s</Clr>
         <Clr color={colors.vsMethod}>{'+'}</Clr>
         <Clr color={colors.vsRegex}>{'/'}</Clr>
         <Clr color={colors.vsDeepBlue}>{')'}</Clr>
         <Clr color={colors.vsOperator}>.</Clr>
         <Clr color={colors.vsMethod}>filter</Clr>
         <Clr color={colors.vsDeepBlue}>{'('}</Clr>
         <Clr color={colors.vsGold}>{'('}</Clr>
         <Clr color={colors.vsText}>{'w'}</Clr>
         <Clr color={colors.vsGold}>{')'}</Clr>
         <Clr color={colors.vsDarkBlue}>{' => '}</Clr>
         <Clr color={colors.vsText}>{'w'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsVariable}>{'length '}</Clr>
         <Clr color={colors.vsOperator}>{'> '}</Clr>
         <Clr color={colors.vsNumber}>{'0'}</Clr>
         <Clr color={colors.vsDeepBlue}>{')'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsText}>{'length'}</Clr>
         <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
         <Clr color={colors.vsDarkBlue} os={1}>const </Clr>
         <Clr color={colors.vsVariable} >chars</Clr>
         <Clr color={colors.vsOperator}>{' = '}</Clr>
         <Clr color={colors.vsVariable}>{'text'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsDarkBlue}>{'length'}</Clr>
         <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
         <Clr color={colors.vsDarkBlue} os={1}>const </Clr>
         <Clr color={colors.vsVariable} >sents</Clr>
         <Clr color={colors.vsOperator}>{' = '}</Clr>
         <Clr color={colors.vsVariable}>{'text'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsMethod}>{'split'}</Clr>
         <Clr color={colors.vsDeepBlue}>{'('}</Clr>
         <Clr color={colors.vsRegex}>{'/'}</Clr>
         <Clr color={colors.vsString}>{'['}</Clr>
         <Clr color={colors.vsRegex}>{'.'}</Clr>
         <Clr color={colors.vsRegex}>{'!'}</Clr>
         <Clr color={colors.vsRegex}>{'?'}</Clr>
         <Clr color={colors.vsString}>{']'}</Clr>
         <Clr color={colors.vsMethod}>{'+'}</Clr>
         <Clr color={colors.vsRegex}>{'/'}</Clr>
         <Clr color={colors.vsDeepBlue}>{')'}</Clr>
         <Clr color={colors.vsOperator}>.</Clr>
         <Clr color={colors.vsMethod}>filter</Clr>
         <Clr color={colors.vsDeepBlue}>{'('}</Clr>
         <Clr color={colors.vsGold}>{'('}</Clr>
         <Clr color={colors.vsText}>{'s'}</Clr>
         <Clr color={colors.vsGold}>{')'}</Clr>
         <Clr color={colors.vsDarkBlue}>{' => '}</Clr>
         <Clr color={colors.vsText}>{'s'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsMethod}>{'trim'}</Clr>
         <Clr color={colors.vsDeepBlue}>{'()'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsVariable}>{'length '}</Clr>
         <Clr color={colors.vsOperator}>{'> '}</Clr>
         <Clr color={colors.vsNumber}>{'0'}</Clr>
         <Clr color={colors.vsDeepBlue}>{')'}</Clr>
         <Clr color={colors.vsOperator}>{'.'}</Clr>
         <Clr color={colors.vsText}>{'length'}</Clr>
         <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
         <Clr color={colors.vsMethod} os={1}>{'alert'}</Clr>
         <Clr color={colors.vsDeepBlue} br={true}>{'('}</Clr>
         <Clr color={colors.vsString} os={1.5}>{'`From Selected Text:'}</Clr>
         <Clr color={colors.vsStringLit}>\n </Clr>
         <Clr color={colors.vsString}>{"Word Count  : "}</Clr>
         <Clr color={colors.vsGold}>{'${'}</Clr>
         <Clr color={colors.vsText}>words</Clr>
         <Clr color={colors.vsGold}>{'}'}</Clr>
         <Clr color={colors.vsStringLit}>\n </Clr>
         <Clr color={colors.vsString}>{"Character Count: "}</Clr>
         <Clr color={colors.vsGold}>{'${'}</Clr>
         <Clr color={colors.vsText}>chars</Clr>
         <Clr color={colors.vsGold}>{'}'}</Clr>
         <Clr color={colors.vsStringLit}>\n </Clr>
         <Clr color={colors.vsString}>{"Sentence"}</Clr>
         <Clr color={colors.vsString} os={2}>{' Count: '}</Clr>
         <Clr color={colors.vsGold}>{'${'}</Clr>
         <Clr color={colors.vsText}>sents</Clr>
         <Clr color={colors.vsGold}>{'}'}</Clr>
         <Clr color={colors.vsString} br={true}>{'`'}</Clr>
         <Clr color={colors.vsDeepBlue} os={1}>{')'}</Clr>
         <Clr color={colors.vsOperator} br={true}>{';'}</Clr>
         
             
            </>
          ),
                  
      };

  const codeSnippet=(name)=> codeSnippets[name];    
  const codeForm = (name) => snippets[name];
  const clip=(name)=>{
    navigator.clipboard.writeText(codeSnippet(name)).then(()=>{
        toast.success('Copied To Clipboard', {
             position: "top-right",
             autoClose: 1000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark",
            });
    })
  }

  return <div className="snippet-holder">
 <ToastContainer    
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
/>
  <h2>{name}</h2>
      <div className="snippet" id={`${name}`} onClick={()=>clip(name)}>
      
              <Clr color={colors.vsLabel}>javascript:</Clr>
              <Clr color={colors.vsGold}> {`(`}</Clr>
              <Clr color={colors.vsPurple}>{`()`}</Clr>
              <Clr color={colors.vsDeepBlue}>{" => "}</Clr>
              <Clr color={colors.vsPurple} br={true}>{`{`}</Clr>
                 {codeForm(name)}
              <Clr color={colors.vsPurple}>{`}`}</Clr>
              <Clr color={colors.vsGold}>{`)`}</Clr>
              <Clr color={colors.vsGold}>{`(`}</Clr>
              <Clr color={colors.vsGold}>{`)`}</Clr>
              <Clr color={colors.vsOperator}>{`;`}</Clr>
        </div>;
  </div>
};

export default Snippet;
// body.contentEditable = window.et % 2 ? "true" : "false";