import BeautifulDom from 'beautiful-dom';
   
const document: string = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="robots" content="nofollow" />
  <meta name="google" content="notranslate" />
  <meta name="description" content="OLAT - Online Learning and Training" />
  <meta name="keywords" content="OLAT, OpenOLAT, eLearning, learning platform, LMS, Learning Management System, LCMS, Learning Content Management System, Open Source, elearning, JAVA, IMS, QTI, SCORM, Content package, collaboration, usability, performance, scalability." /> 
  <meta name="dcterms.creator" content="OpenOLAT - http://www.openolat.org" />
  <meta name="dcterms.subject" content="OpenOLAT - infinite learning - Your Open Source Learning Management System" />
  <meta name="dcterms.contributor" content="see http://www.openolat.org" />
  <meta name="dcterms.date" content="2010-03-16" />
  <meta name="dcterms.type" content="Interactive Resource" />
  <meta name="dcterms.identifier" content="http://www.openolat.org" />
  <meta name="dcterms.rights" content="http://www.openolat.org" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <script>
  /* <![CDATA[ */ 
  var o_info = new Object();
  o_info.initialPageLoadFinished = false;
  o_info.o_winid = '1006336043';
  o_info.o_user = { identity : 16114974871, lastName : "Akhavan Safa", firstName : "Dario"}; o_info.uriprefix="/auth/";
  o_info.bc="";
  o_info.businessPath="";
  o_info.startBusinessPath="";
  o_info.serverUri="https://lms.uzh.ch"
  o_info.dirty_form = "Attention! You still have unsaved form data. If you press OK, you will leave the form without saving the unsaved data. The contained changes will be lost.";
  o_info.locale = "en";
  o_info.lastClickTime = new Date().getTime();
  o_info.drop = true;
  o_info.o_baseURI = "/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/";
  o_info.i18n_noresponse_title = "Communication error";
  o_info.i18n_noresponse = "The requested action could not be executed since the server does not respond or is overloaded. Please try to execute the action again or reload the page. ";
  o_info.i18n_topnav_more = "More";
  o_info.oo_noresponse_title = "Session timeout";
  o_info.oo_noresponse = "Your session has been timed out or the server has been restarted. To login again please use this <b><a href=\'reload.html\'>link<\/a><\/b> or reload the page.<br><br>Be aware that all unsaved changes in your browser window will be lost during the login process. Close this dialog to manually copy unsaved content such as forum postings to the browser clip board and to manually reload the page. ";
  o_info.zseed = 0;
  if (top!=self){top.location=self.location+"?o_winrndo=1";}
  function o_start() {
      o_init();
          
                  o_info.initialPageLoadFinished = true;
  }
  
  function o_mathjax(fct_success) {
      window.MathJax = {
          extensions: ["jsMath2jax.js"],
          messageStyle: 'none',
          showProcessingMessages: false,
          showMathMenu: false,
          menuSettings: { },
          jsMath2jax: {
              preview: "none"
          },
          tex2jax: {
              ignoreClass: "math"
          },
          "HTML-CSS": {
              EqnChunk: 5, EqnChunkFactor: 1, EqnChunkDelay: 100
          },
          "fast-preview": {
              disabled: true
          }
      }
      jQuery.ajax("//mathjax.openolat.org/mathjax/2.7-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML", {
          cache: true,
          dataType: "script",
          crossDomain: true,
          success: function() {
              if(!(typeof fct_success === "undefined")) {
                  fct_success();
              }
          }
      });
  }
  
  
  /* ]]> */
  </script>
  <script>
  /* <![CDATA[ */ 
  try{
      if(o_info.startBusinessPath != null && o_info.startBusinessPath.length > 0
              && window.history && !(typeof window.history === "undefined") && window.history.pushState) {
          window.history.pushState('', document.title, o_info.startBusinessPath);
          o_info.startBusinessPath = null;
      }
  } catch(e) { }
  /* ]]> */
  </script>
  <script src='/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/js/jquery/jquery-3.4.1.min.js'></script>
      <script src='/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/js/js.plugins.min.js'></script>
      <script src='/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/movie/player.min.js'></script>
      <script src='/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/js/iframeResizer/iframeResizer.min.js'></script>
  
      <link href='/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/js/js.plugins.min.css' rel="stylesheet" />
  <script>
  /* <![CDATA[ */ 
      jQuery.noConflict();
      
          jQuery(document).ooTranslator().initialize("/g/openolat14218-devorg.olat.core.commons.chiefcontrollers.JSTranslatorMapper");
      o_info.oo_translator = jQuery(document).ooTranslator();
          jQuery(window).on("popstate", function(e) {
          if(e.originalEvent.state && e.originalEvent.state.businessPath) {
              window.location.href = e.originalEvent.state.businessPath;
          }
      });
  jQuery(function() {
      if ((window.unsafeWindow == null ? window : unsafeWindow).MathJax == null) {
          var count = jQuery('div.math,span.math,math,div.mathEntryInteraction').length;
          if (count > 0) {
              o_mathjax();
          }
      }
  });
  /* ]]> */
  </script>
  
  <script src="/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/js/jquery/ui/jquery-ui-1.11.4.custom.resize.min.js"></script>
  
  <link id='o_theme_css' href='/raw/openolat14218-dev/themes/olat/theme.css' rel='stylesheet' />
  <link id='o_email_css' href='/raw/openolat14218-dev/themes/olat/email.css' rel='stylesheet' />
  <script src='/raw/openolat14218-dev/themes/olat/theme.js'></script>
  <link rel='icon' href='/raw/openolat14218-dev/themes/olat/favicon.ico' type='image/x-icon' />
  <link rel='icon' href='/raw/openolat14218-dev/themes/olat/meta/favicon16.png' type='image/png' sizes='16x16' />
  <link rel='icon' href='/raw/openolat14218-dev/themes/olat/meta/favicon32.png' type='image/png' sizes='32x32' />
  <link rel='apple-touch-icon' href='/raw/openolat14218-dev/themes/olat/meta/appicon180.png' type='image/png' sizes='180x180' />
  <link rel='manifest' href='/raw/openolat14218-dev/themes/olat/meta/manifest.json' />
  <meta name='msapplication-TileColor' content='#ffffff' />
  
      <script>
          jQuery(document).ready(function() {
              /* Detect IE below version 11 */
              if (window.navigator.userAgent.indexOf('MSIE ') > 0) {
                  jQuery('body').addClass('o_browser_ie10');
              } else if (!!navigator.userAgent.match(/Trident\/7\./)) {
                  jQuery('body').addClass('o_browser_ie11');
              }
          });
      </script>
  <!-- empty -->
  <style id="o_fontSize_css"></style>
  <style>
          .o_custom_navbar-brand { background-image: none; }
  </style>
  
  
  
  
  <title>OLAT - infinite learning</title>
  </head>
  
  <body onload="o_start();" id="o_body" class=" o_lang_en ">
  <div id="o_bg"></div>
  <!-- START guiDebug -->
  
  <!-- END guiDebug -->
  <!-- START inlineTranslation -->
  
  <!-- END inlineTranslation -->
  <!-- START jsServer -->
  <div id='o_c1006336134'><div id='o_c1006336132'><div id='o_c1006336131'><div style="height:0px">
  <script>
  /* <![CDATA[ */ 
  var stopped = true;
  function initPolling () {
      o_info.lastClickTime = new Date().getTime();
      pollgrowth = 0;
      pollcount  = 0;
      if (stopped) {
          stopped = false;
          tick();
      }
  }
  
  jQuery("#o_body").bind("mouseover click keypress", function(event){initPolling();});
  
  o_info.mainwinref = this.window;
  o_info.wins = {};
  o_info.poller = null;
  
  var growthrate = 10;
  var pollminutes = 60;
  var pollcount = 0;
  var pollError = 0;
  var pollgrowth = 0;
  var timestampLastPoll = new Date().getTime();
  
  // set timestamp cookie to inform other windows that they are outdated
  var sbtimestamp = new Date().getTime();
  var sbcookie = 'OLAT-UI-TIMESTAMP';
  if (thickCheckStandBy()) {
      document.cookie = sbcookie+'='+sbtimestamp+'; path=/; SameSite=strict';
  }
  
  
  function thickCheckStandBy() {
      var check = false;
      try {
          if (window.opener == null) {
              check = true;
                  } else if(window.opener.location.hostname != document.location.hostname) {
              check = true;
          }
      } catch(e) {
          if(window.console) console.log(e);
          check = true;
      }
      return check;
  }
  
  function tick () {
      o_info.poller = jQuery.periodic({period: 5000, decay:1.005, max_period: Number.MAX_VALUE}, function() {
          if ( !o_info.linkbusy && (this.period > 1000) && (pollError < 2) ) {
              try {
                  var now = new Date().getTime();
                  if ((now - o_info.lastClickTime) < (pollminutes*60*1000)) {
                      if ((now - timestampLastPoll) > (this.period + pollgrowth)) {
                          timestampLastPoll = now;
                          pollcount++;
                          pollgrowth = Math.ceil((this.period+pollgrowth)*(100+growthrate)/100) - this.period;
                          o_info.ajaxpp = jQuery.ajax({
                              method:'POST',
                              url:'/m/f1e381eab5700f4b08db4a3adad6ed19/',
                              cache: false,
                              success:onPollSuccess,
                              error:onPollFailure
                          });
  
                      }
                  } else {
                      stopped = true;
                  }
              } catch (e) {
                  o_info.poller.cancel(); //stop on errors
              }
          }
  
          // if window is not a popup window, become a standby window 
          // in case the cookie timestamp is newer than the own one set while loading
          // because another window holds the current UI which works
          if (thickCheckStandBy()) {
              var p = sbcookie + "=";
              var ca = document.cookie.split(';');
              for(var i=0;i < ca.length;i++) {
                  var c = ca[i];
                  while (c.charAt(0)==' ') c = c.substring(1,c.length);
                  if (c.indexOf(p) == 0) {
                      try {
                          var ts = Math.floor(c.substring(p.length,c.length));
                          if (ts > sbtimestamp) {
                              window.onunload=null;
                              window.onbeforeunload=null;
                                                          jQuery.ajax({
                                  method:'get',
                                  url:'/m/753979fc8f7f51f8836f47803efa8333/',
                                  cache: false,
                                  success:function() {
                                                                          window.location='/m/753979fc8f7f51f8836f47803efa8333/';
                                  },
                                  error: function() {
                                                                                                                                                                                        o_info.poller.cancel(); 
                                  }
                              })();
                              
                          }
                      } catch (e) {
                          // does not matter
                      };
                  }
              }
          }
      });
  }
  
  jQuery(document).ready(initPolling);
  
  jQuery(function() { 
      setTimeout( function(){ if (!o_info.ajaxpp) {
              showMessageBox('error', 'error', 'Some core functionality could not be started. Please log out of OLAT and login again.');
          }},60000);
      }
  );
  
  function onPollSuccess(content, s, response) {
      if(response.status == 304) {
           pollError = 0;
      } else if(response.status >= 200 && response.status < 300) {
           pollError = 0;
           o_onc(response);
      } else {
           pollError++;
      }
  }
  
  function onPollFailure(response) {
    pollError++;
    if(response.status == 404) { 
                          o_info.poller.cancel(); 
    }
  }
  /* ]]> */
  </script>
  <div id='o_c1006336133'><div id='o_c1006336130'><script>
  /* <![CDATA[ */
  if (o_info.poller && o_info.poller.period != 5000) {
      o_info.poller.period = 5000;
      o_info.poller.reset();
  }
  /* ]]> */
  </script>
  </div></div>
  <div id="oaawrp" style="visibility:hidden;width:0px;height:0px">
  <iframe src='/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/empty.html' name="oaa0" id="oaa0" width="1" height="1" onload="clearAfterAjaxIframeCall()"></iframe>
  </div>
      <form id="o_oaap" method="post" action="#" onsubmit="return false" target="oaa0"><input type="hidden" name="v"></form>
  </div></div></div></div>
  <!-- END jsServer -->
  
  <!-- START olatContentPanel -->
  
  <a href="#o_main_container" class="sr-only">Skip to main content</a>
      <div id="o_beta_logo"></div>
  
  <div id="o_messages" class="hidden-print"><div id='o_c1006336049'><div id='o_c1006336042'><!-- empty --></div></div></div>
      
  <div id="o_header_wrapper"> 
      <div id="o_header_container" class="o_container_offcanvas container-fluid"> 
          <div id="o_logo"></div>
          <div id="o_right_logo"></div>
          
              </div>
  </div>
  <a id='o_top' aria-hidden='true'></a>
  <div id="o_offcanvas_right" class="o_navbar o_navbar-offcanvas " role="navigation">
      <a href="javascript:;" class="o_offcanvas_close" title="Close"><i class='o_icon o_icon_close o_icon-lg'> </i> </a>
      <div id="o_offcanvas_right_container" class="o_navbar-collapse">
              <div id='o_c1006336117'><ul id="o_c1006336100" class="nav o_navbar-nav o_navbar-right o_sel_menu_tools">
              <li role="presentation" class="dropdown-header">Personal tools</li>
                   <li><a class=" o_sel_user_tools-calendar" id="o_c1006336102"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336102:2:1/',true,true,'cid','personal.tool.alt.1006336101');"  title="Calendar"><i class='o_icon o_icon-fw o_icon_calendar o_icon-lg'></i> <span>Calendar</span></a></li>
                   <li><a class=" o_sel_user_tools-userfolder" id="o_c1006336104"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336104:2:1/',true,true,'cid','personal.tool.alt.1006336103');"  title="Personal folder"><i class='o_icon o_icon-fw o_bc_icon o_icon-lg'></i> <span>Personal folder</span></a></li>
                   <li><a class=" o_sel_user_tools-notelist" id="o_c1006336106"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336106:2:1/',true,true,'cid','personal.tool.alt.1006336105');"  title="Notes"><i class='o_icon o_icon-fw o_icon_notes o_icon-lg'></i> <span>Notes</span></a></li>
                   <li><a class=" o_sel_user_tools-effstatements" id="o_c1006336108"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336108:2:1/',true,true,'cid','personal.tool.alt.1006336107');"  title="Evidences of achievement"><i class='o_icon o_icon-fw o_icon_certificate o_icon-lg'></i> <span>Evidences of achievement</span></a></li>
                   <li><a class=" o_sel_user_tools-otherusers" id="o_c1006336112"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336112:2:1/',true,true,'cid','personal.tool.alt.1006336111');"  title="Other users"><i class='o_icon o_icon-fw o_icon_search o_icon-lg'></i> <span>Other users</span></a></li>
                  <li><a href="https://drive.switch.ch" target="_blank"
                         title="SWITCHdrive"><i class="o_icon o_icon-fw o_icon_provider_oauth o_icon-lg"></i> SWITCHdrive</a></li>
              <li role="presentation" class="divider"></li>
              <li role="presentation" class="dropdown-header">Configuration</li>
                   <li><a class=" o_sel_user_tools-profil" id="o_c1006336110"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336110:2:1/',true,true,'cid','personal.tool.alt.1006336109');"  title="Profile"><i class='o_icon o_icon-fw o_icon_user o_icon-lg'></i> <span>Profile</span></a></li>
                   <li><a class=" o_sel_user_tools-mysettings" id="o_c1006336114"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336114:2:1/',true,true,'cid','personal.tool.alt.1006336113');"  title="System settings"><i class='o_icon o_icon-fw o_icon_settings o_icon-lg'></i> <span>System settings</span></a></li>
                   <li><a class=" o_sel_user_tools-mypassword" id="o_c1006336116"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336116:2:1/',true,true,'cid','personal.tool.alt.1006336115');"  title="Password"><i class='o_icon o_icon-fw o_icon_password o_icon-lg'></i> <span>Password</span></a></li>
          <li role="presentation" class="divider"></li>
      <li>
                                  <a href="/auth/1%3A1%3A1006336100%3A2%3A0%3Acid%3Alogout/" class="o_logout" title="Log off from OLAT" onclick="if (window.olatonunload) {olatonunload();}">
              <i class="o_icon o_icon_logout o_icon-fw"></i> Log out
          </a>
      </li>
  </ul>
  </div>
      </div>
  </div>
  <div id="o_navbar_wrapper" class="o_navbar" role="navigation">
      <div id="o_navbar_container" class="o_container_offcanvas container-fluid">
          <a class="o_navbar-brand " href="/url/RepositoryEntry/16521331066/CourseNode/95055429199200/path%3D~~/0" title="OLAT 20FS" ></a>
          
          <div class="o_collapse o_navbar-collapse">
                          <ul id="o_c1006336046" class="o_navbar_sites nav o_navbar-nav">
          <li class=' o_site_repository'>
              <a class="" id="o_c1006336053" accesskey="r"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336053:2:1/',true,true,'cid','t');"  title="Courses"><span>Courses</span></a>
          </li>
          <li class=' o_site_groups'>
              <a class="" id="o_c1006336055" accesskey="g"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336055:2:1/',true,true,'cid','t');"  title="Work with your personal learning and project groups."><span>Groups</span></a>
          </li>
  </ul>
  <script>
  /* <![CDATA[ */ 
      jQuery(document).trigger("oo.nav.sites.modified");
  /* ]]> */
  </script>
  
              <ul id="o_c1006336047"  class="o_navbar_tabs nav o_navbar-nav">
      
      <li class=" active ">
          <a class="" id="o_c1006337246" accesskey="s"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337246:2:1/',true,true,'cid','a0');"  title="21FS MINF4217 XML and Databases (L)"><i class='o_icon o_icon-fw o_CourseModule_icon'></i> <span>21FS MINF4217 XML and Databases (L)</span></a>
              <a class="o_navbar_tab_close" id="o_c1006337247"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337247:2:1/',true,true,'cid','c0');"  title="Close"><i class='o_icon o_icon_close_tab'></i> <span></span></a>	 	</li>
  </ul>
  <script>jQuery(document).trigger("oo.nav.tabs.modified");</script>
  
                              <div id='o_c1006336099'><div id="o_c1006336056" class="o_navbar_tools">
      <ul id="o_navbar_tools_permanent" class="nav o_navbar-nav o_navbar-right">
               <li  class="o_navbar_tool "><a class=" o_sel_user_tools-notifications" id="o_c1006336058"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336058:2:1/',true,true,'cid','personal.tool.alt.1006336057');"  title="Subscriptions"><i class='o_icon o_icon-fw o_icon_notification o_icon-lg'></i> <span>Subscriptions</span></a></li>
               <li  id="o_navbar_imclient"  class="o_navbar_tool "><div id='o_c1006336070'><div id='o_c1006336059'>	<div class="o_im_messages">
          <div id='o_c1006336061'><div id='o_c1006336069'><div id='o_c1006336068'><!-- empty --></div></div>
  
  
  </div>
      </div>
  
      <div id="o_im_status" class="dropdown">
          <a href="#" class="o_undecorated dropdown-toggle" data-toggle="dropdown" title="Change Instant Messaging status " aria-label="Change Instant Messaging status ">
              <i class="o_icon o_icon_status_available"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-right" role="menu">
              <li><span class="o_chelp_wrapper"><a href="https://help.olat.uzh.ch/display/OO142EN/Chat" class="o_chelp" target="_blank" title="Lookup help for this page in manual"><i class='o_icon o_icon_help'> </i> Help</a></span></li>
              <li><a class="" id="o_c1006336063"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336063:2:1/',true,true,'cid','presence.available');" ><i class='o_icon o_icon_status_available o_icon-fw'></i> <span>Available</span></a></li>
              <li><a class="" id="o_c1006336064"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336064:2:1/',true,true,'cid','presence.dnd');" ><i class='o_icon o_icon_status_dnd o_icon-fw'></i> <span>Please do not disturb</span></a></li>
              <li><a class="" id="o_c1006336065"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336065:2:1/',true,true,'cid','presence.unavailable');" ><i class='o_icon o_icon_status_unavailable o_icon-fw'></i> <span>Not available</span></a></li>
          </ul>
      </div>
  
          <div id="o_im_summary"><a class="badge" id="o_c1006336066"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336066:3:1/',true,true,'cid','cmd.roster');"  title="Who else from my group colleagues are logged on to OLAT? Select one person you want to chat with."><span>9/2596</span></a> <script>
  (function(){ var o_c1006336066 = jQuery('#o_c1006336066');o_c1006336066.click(function(event) { jQuery('#o_c1006336066').each(function(index, el) {;  var href = jQuery(el).attr('href'); 	if(href.indexOf('x') == -1) jQuery(el).attr('href',href+'x'+event.pageX+'y'+event.pageY+''); });});})();
  </script></div>
      <div id='o_c1006336067'><!-- empty --></div>
  </div></div></li>
               <li  id="o_navbar_help"  class="o_navbar_tool "><a class="" href="https://help.olat.uzh.ch/display/OO142EN/" target="oohelp" title="Start OLAT Help"><i class="o_icon o_icon_help o_icon-lg"> </i> <span>Help</span></a></li>
               <li  id="o_navbar_print"  class="o_navbar_tool "><a href="javascript:o_doPrint();" title="Print this page" >
      <i class="o_icon o_icon_print o_icon-lg"></i>
      <span>Print</span>
  </a></li>
               <li  id="o_navbar_search_opener"  class="o_navbar_tool  dropdown "><a id="o_search_tool_toggler" href="#" class="dropdown-toggle" data-toggle="dropdown" title="Search" aria-label="Search">
      <i class="o_icon o_icon_search o_icon-lg"></i>
      <span>Search</span>
  </a>
  <ul class="dropdown-menu dropdown-menu-right">          
      <li id="o_navbar_search" class="o_navbar-form">
          <div id='o_c1006336079'><div id='o_c1006336078'><form  method="post" id="ofo_1006336078" name="ofo_1006336078" action="/auth/1%3A1%3A1006336078%3A1%3A1%3Aofo_%3Afid/"  onsubmit="return o_XHRSubmit('ofo_1006336078');" ><input type="hidden" id="ofo_1006336078_dispatchuri" name="dispatchuri" value="undefined" /><input type="hidden" id="ofo_1006336078_eventval" name="dispatchevent" value="undefined" /><fieldset  id="o_c1006336077"  class="o_form form-inline  ">
  
      <div class="form-group  ">
              <div  id="o_c1006336083"  class="form-group  ">
          <div class="input-group">
          
                  <div id='o_c1006336087'><input type="text" id="o_fi1006336087" name="o_fi1006336087" class='form-control ' size="35" maxlength="255" value=""  placeholder="Search" autofocus /> <script>
  (function() { jQuery('#o_fi1006336087').on('change keypress', {formId:"ofo_1006336078_dispatchuri", hideMessage:false}, setFlexiFormDirtyByListener);})();
  </script></div>
  
              <span class="input-group-addon">
                  <a class="o_search" id="o_fi1006336092" href="javascript:;" onclick="o_ffEvent('ofo_1006336078','ofo_1006336078_dispatchuri','o_fi1006336092','ofo_1006336078_eventval','2');"  title="Search in: &quot;In OLAT&quot;"><i class='o_icon o_icon-fw o_icon_search o_icon-lg'></i> <span></span></a>
              </span>
  
          </div>
  </div>
      </div>
  </fieldset></form> <script>
   /* <![CDATA[ */ 
   (function() {jQuery('#ofo_1006336078').keypress(function(event) {
   if (13 == event.keyCode) {
    event.preventDefault();
    if (this.onsubmit()) { this.submit(); }
   }
  });
  })();
   /* ]]> */ 
  </script></div></div>
      </li>
  </ul>
  <script>
  jQuery('#o_search_tool_toggler').click(function () {
      setTimeout(function() {
          jQuery('#o_search_tool_toggler[aria-expanded="true"] + .dropdown-menu #o_navbar_search input:text').focus();	
      },0);
  });
  </script>
  </li>
               <li  class="o_navbar_tool "><a class=" o_sel_user_tools-Mail" id="o_c1006336096"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336096:2:1/',true,true,'cid','personal.tool.alt.1006336095');"  title="E-mail"><i class='o_icon o_icon-fw o_icon_mail o_icon-lg'></i> <span>E-mail</span></a></li>
          <li id="o_navbar_my_menu" class="o_portrait">
              <a id="o_sel_navbar_my_menu_caret" href="javascript:OPOL.navbar.toggleRight();">
                  <div id='o_c1006336098'><div id='o_c1006336097'><div class="o_portrait">
      <div class="o_portrait_image">
          <img src="/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/images/transparent.gif" alt="User profile and visiting card: Akhavan Safa, Dario" title="User profile and visiting card: Akhavan Safa, Dario" class="o_portrait_dummy_small" />
      </div>
  </div>
   </div></div>
                  <span>Dario</span>
                  <b class="caret"> </b>
              </a>
          </li>
      </ul>
  </div>
  </div>
          </div>
          
      </div>
  </div>
  <div id="o_container_page_width_toggler">
      <div id="o_go_standard_width" title="Use standard width for content, optimized for reading content" class="btn btn-primary btn-xs o_noprint"><i class="o_icon o_icon_width_collapse o_icon-fw"> </i></div>
      <div id="o_go_full_width" title="Use standard width for content, optimized for reading content" class="btn btn-default btn-xs o_noprint"><i class="o_icon o_icon_width_expand o_icon-fw"> </i></div>
  </div>
  <div><script>
  /* <![CDATA[ */ 
      jQuery(document).ready(function() {
          jQuery("#o_go_standard_width").click(function() { OPOL.setContainerFullWidth(0); o_XHRNFEvent('/auth/1:1:1006336045:2:1/','cid','width.standard','no-response','oo-no-response'); });
          jQuery("#o_go_full_width").click(function() { OPOL.setContainerFullWidth(1); o_XHRNFEvent('/auth/1:1:1006336045:2:1/','cid','width.full','no-response','oo-no-response'); });
      });
  /* ]]> */
  </script></div>
  <div id='o_c1006336051'><!-- empty --></div>
  
  <div id="o_main_wrapper">
      <div id="o_main_container" class="o_container_offcanvas container-fluid">
          <div id='o_c1006336119'><div id='o_c1006337248'><div id='o_c1006337169' class=''><div id='o_main_toolbar' class='o_toolbar'><div id='o_c1006337169_bbar' class='o_breadcrumb'><ol class='breadcrumb'><li class='o_breadcrumb_back'><a class="" id="o_c1006337170" accesskey="b"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337169_bbar:1:1/',true,true,'cid','back');"  title="Close 21FS MINF4217 XML and Databases (L)" aria-label="Close 21FS MINF4217 XML and Databases (L)"><i class='o_icon o_icon_back'></i> <span> </span></a></li><li><a class="" id="o_c1006337225"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337225:2:1/',true,true,'cid','crumb_0');" ><span>21FS MINF4217 XML and Databases (L)</span></a></li><li class='o_breadcrumb_close'><a class="" id="o_c1006337171" accesskey="x"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337169_bbar:1:1/',true,true,'cid','close');"  title="Close 21FS MINF4217 XML and Databases (L)" aria-label="Close"><i class='o_icon o_icon_close_tool'></i> <span>Close 21FS MINF4217 XML and Databases (L)</span></a></li></ol></div><div id='o_c1006337169_tbar' class='o_tools_container'><div class='container-fluid'><ul class='o_tools o_tools_right_edge list-inline'><li class='o_tool_previous'><a class="" id="o_c1006337244"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337244:3:1/',true,true,'cid','previouselement');"  title="Go to previous page"><i class='o_icon o_icon-fw o_icon_previous_toolbar'></i> <span></span></a></li><li class='o_tool_next'><a class="" id="o_c1006337245"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337245:3:1/',true,true,'cid','nextelement');"  title="Go to next page"><i class='o_icon o_icon-fw o_icon_next_toolbar'></i> <span></span></a></li></ul><ul class='o_tools o_tools_right list-inline'><li class='o_tool_dropdown dropdown'><a href='#' class='dropdown-toggle dropdown-menu-right' data-toggle='dropdown'><span class='o_inner_wrapper '><i class='o_icon o_icon_user'>&nbsp;</i></span> <i class='o_icon o_icon_caret'> </i> <span class='o_label'>My course</span></a><ul class='dropdown-menu dropdown-menu-right' role='menu'><li><a class="" id="o_c1006337231" href="javascript:;" onclick="o_openPopUp('/auth/1%3A1%3A1006337231%3A2%3A0%3Acid%3Apersonalnote/','notes',750,550); return false;" ><i class='o_icon o_icon-fw o_icon_notes'></i> <span>Notes</span></a></li><li><a class="" id="o_c1006337232"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337232:2:1/',true,true,'cid','bookmark');"  title="Remove from favourites"><i class='o_icon o_icon-fw o_icon o_icon_bookmark'></i> <span>Bookmark</span></a></li><li class='divider'></li><li><a class="" id="o_c1006337234"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337234:2:1/',true,true,'cid','group');" ><i class='o_icon o_icon-fw o_icon_group'></i> <span>Campusgruppe A</span></a></li><li class='divider'></li><li><a class="" id="o_c1006337235"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337235:2:1/',true,true,'cid','leave');" ><i class='o_icon o_icon-fw o_icon_sign_out'></i> <span>Leave course</span></a></li></ul></li></ul><ul class='o_tools o_tools_center list-inline'><li class='o_tool'><a class="" id="o_c1006337237"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337237:2:1/',true,true,'cid','courseconfig');" ><i class='o_icon o_icon-fw o_icon_details'></i> <span>Course info</span></a></li><li class='o_tool'><a class="" id="o_c1006337242"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337242:2:1/',true,true,'cid','chat');" ><i class='o_icon o_icon-fw o_icon_chat'></i> <span>Course chat</span></a></li></ul></div></div></div><div id='o_c1006337216'><script>
  /* <![CDATA[ */
  o_info.course_id="16979231153";
  function o_activateCourseNode(nodeid) {
      if (!o_info.linkbusy) {
          window.focus();
          o_XHREvent('/auth/1:1:1006337215:2:1/',false,false,'cid','activateCourseNode',"nodeid",nodeid);
                  o_scrollToElement('#o_top');
      }
  }
  /* ]]> */ 
  </script>
  <div class="o_course_run" data-nodeid="85421310414617">
      <div id='o_c1006337214'><div id='o_c1006337209'><div id="o_main" class="o_hidecol2 row">
      <div id="o_main_left" style="width: 14em;">
          <div id="o_main_left_content" class="clearfix"> 
              <div id='o_c1006337210'><div id='o_c1006337172'>
  <div class='o_tree o_tree_root_visible o_course_menu' role='navigation'><ul class="o_tree_l0"><li class=' active_parent' data-nodeid='85421310414617'><div id='dd85421310414617' class='o_tree_l0'><span class='o_tree_link o_tree_l0 active_parent'><a  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337172:3:1/',true,true,'cid','ctncl','nidle','85421310414617');"  title="21FS MINF4217 XML and Databases (L)"><i class='o_icon o_icon-fw o_CourseModule_icon'></i> <span  class='o_tree_item'>21FS MINF4217 XML and ...</span></a></span></div>
  <ul class=" o_tree_l1"><li class='' data-nodeid='103344185855513'><div id='dd103344185855513' class='o_tree_l1'><span class='o_tree_link o_tree_l1 o_tree_level_label_leaf'><a  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337172:3:1/',true,true,'cid','ctncl','nidle','103344185855513');"  title="Course Materials"><i class='o_icon o_icon-fw o_bc_icon'></i> <span  class='o_tree_item'>Materials</span></a></span></div></li><li class=' active' data-nodeid='103344184542120'><div id='dd103344184542120' class='o_tree_l1 active'><span class='o_tree_link o_tree_l1 active o_tree_level_label_leaf'><a  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337172:3:1/',true,true,'cid','ctncl','nidle','103344184542120');"  title="Recordings"><i class='o_icon o_icon-fw o_podcast_icon'></i> <span  class='o_tree_item'>Recordings</span></a></span></div></li><li class='' data-nodeid='85421310450657'><div id='dd85421310450657' class='o_tree_l1'><span class='o_tree_link o_tree_l1 o_tree_level_label_leaf'><a  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337172:3:1/',true,true,'cid','ctncl','nidle','85421310450657');"  title="Discussion Forum"><i class='o_icon o_icon-fw o_fo_icon'></i> <span  class='o_tree_item'>Forum</span></a></span></div></li><li class='' data-nodeid='94133642295751'><div id='dd94133642295751' class='o_tree_l1'><span class='o_tree_link o_tree_l1 o_tree_level_label_leaf'><a  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337172:3:1/',true,true,'cid','ctncl','nidle','94133642295751');"  title="Personalized Drop Box"><i class='o_icon o_icon-fw o_gta_icon'></i> <span  class='o_tree_item'>Drop Box</span></a></span></div></li></ul></li></ul></div></div></div>	
          </div>
          <div id="o_main_left_toggle" class="hidden-print">
            <span class="sr-only">Toggle content menu</span>
            <i class="o_icon o_icon_menuhandel"></i>
          </div>
      </div>
      <div id="o_main_center"> 		<a id="o_content" aria-hidden="true"></a> 
          <div id="o_main_center_content" class="clearfix o_scrollblock">			          
                 <div id="o_main_center_content_inner">
                  <div id='o_c1006337212'><div id='o_c1006337173'><div id='o_c1006337574'><div id="o_c1006337573" class="o_titled_wrapper ">
      <h2>
          <i class="o_icon o_podcast_icon"></i> 
          Recordings
      </h2>
  <div class="o_content">
      <div id='o_c1006337572'><div id='o_c1006337295'><div id='o_c1006337696'><div id='o_c1006337695'><form  method="post" id="ofo_1006337695" name="ofo_1006337695" action="/auth/1%3A1%3A1006337695%3A1%3A1%3Aofo_%3Afid/"  onsubmit="return o_XHRSubmit('ofo_1006337695');" ><input type="hidden" id="ofo_1006337695_dispatchuri" name="dispatchuri" value="undefined" /><input type="hidden" id="ofo_1006337695_eventval" name="dispatchevent" value="undefined" /><div id='o_c1006337694'><a class="o_link_back" id="o_c1006337750" accesskey="b"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006337750:2:1/',true,true,'cid','back');" ><i class='o_icon o_icon_back'></i> <span>Back to the overview</span></a>
  
  <legend style="margin-top: 20px">Session 1</legend>
  
  <div class="embed-responsive embed-responsive-16by9">
      <!--suppress HtmlUnknownTarget -->
      <iframe src="https://player.cast.switch.ch?tenant=uzh-ch&id=ef46a244-5ff1-4e8a-826e-18f4fc1e1be9&policy=eyJTdGF0ZW1lbnQiOnsiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6MTYyODE2Mjk0NjQ4N30sIlJlc291cmNlIjoiaHR0cHM6XC9cL3BsYXllci5jYXN0LnN3aXRjaC5jaD90ZW5hbnQ9dXpoLWNoJmlkPWVmNDZhMjQ0LTVmZjEtNGU4YS04MjZlLTE4ZjRmYzFlMWJlOSJ9fQ&keyId=uzh-ch-pl&signature=dc1517409fa0e965ea7d5762dd1c78c4a0c75b9f995d4e25c3c4a410b5e350c5" allowfullscreen>
          The recording cannot be played back.
      </iframe>
  </div>
  
  <div class="panel panel-default o_infopanel" style="margin-top: 20px">
      <div class="panel-heading" data-toggle="collapse" data-target="#collapseInfo" aria-expanded="true">
          <h3 class="panel-title">
              <span class="o_chelp_wrapper"></span>
              <i id="collapseInfoToggler" class="o_icon o_icon-fw o_icon_close_togglebox"> </i>
              Information
          </h3>
      </div>
      <div id="collapseInfo" class="panel-collapse collapse">
          <table class="table table-condensed table-striped">
              <tbody>
              <tr>
                  <th>Titel</th>
                  <td>Session 1</td>
              </tr>
              <tr>
                  <th>Subject</th>
                  <td>
                  </td>
              </tr>
              <tr>
                  <th>Presenters</th>
                  <td>
                  </td>
              </tr>
              <tr>
                  <th>Starting time</th>
                  <td>2/26/2021 2:37 PM</td>
              </tr>
              <tr>
                  <th>Location</th>
                  <td></td>
              </tr>
              </tbody>
          </table>
      </div>
  </div>
  <script type="text/javascript">
      /* <![CDATA[ */
      jQuery('#collapseInfo').on('hide.bs.collapse', function () {
          jQuery('#collapseInfoToggler').removeClass('o_icon_close_togglebox').addClass('o_icon_open_togglebox');
      });
      jQuery('#collapseInfo').on('show.bs.collapse', function () {
          jQuery('#collapseInfoToggler').removeClass('o_icon_open_togglebox').addClass('o_icon_close_togglebox');
      })
      /* ]]> */
  </script>
  </div></form> <script>
   /* <![CDATA[ */ 
   (function() {jQuery('#ofo_1006337695').keypress(function(event) {
   if (13 == event.keyCode) {
    event.preventDefault();
    if (this.onsubmit()) { this.submit(); }
   }
  });
  })();
   /* ]]> */ 
  </script></div></div>
  </div></div>
  </div>
  </div>
  
  </div></div></div>		
              </div>
          </div>
      </div>
  </div>
  <script>
  jQuery().ready(function() {
      // Main vertical splitter, anchored to the browser window
      jQuery("#o_main_left").resizable({
          handles: 'e',
          containment: '#o_main',
          grid: [o_info.emPxFactor, 10000],
          stop: function() {
              var leftCol = jQuery('#o_main_left');
              var newEmWidth = Math.round(leftCol.width() / o_info.emPxFactor);
              leftCol.width(newEmWidth + 'em');
              o_XHRNFEvent('/auth/1:1:1006337209:2:1/','cid','saveCol1Width','no-response','oo-no-response', "newEmWidth", newEmWidth);
          }
      });
  
          window.menuState = {
          open : true,
          docked : true			
      };
      
      window.o_showMenu = function(duration) {
          duration = (typeof duration === "undefined") ? 500 : duration;
          if (!menuState.open) {
              jQuery('#o_main_left_content').show();
              var l = jQuery('#o_main_left');
              l.transition({'x': 0, 'y': 0, 'left': 0}, duration, function() {
                  menuState.open = true;
              });
          } 
      };
      window.o_hideMenu = function(duration) {
          duration = (typeof duration === "undefined") ? 500 : duration;
          if (!menuState.docked && menuState.open) {
              var l = jQuery('#o_main_left');
              jQuery('#o_main_left_content').hide();
              l.transition({'x': '-' + l.css('width'), 'y': 0, 'left': '5px'}, duration, function() {
                  menuState.open = false;
              });			
          } 
      };
      window.o_undockMenu = function(duration) {
          if (menuState.docked) {
              var left = jQuery('#o_main_left');
              var offset = 0;
              try {	
                  offset = left.offset().top;
                  offset -= jQuery('#o_navbar_wrapper').outerHeight(false);
              } catch (e) {}
  
              jQuery('#o_main_left_toggle').show();
              left.css({position: 'absolute'})
                  .addClass('o_offcanvas')
                  .transition({'y': '-' + offset}, duration, function() {
                      OPOL.adjustHeight();
                      // close menu when something happens on the screen
                      jQuery(document).on('click', '.o_tree_link', o_hideMenu);
                      menuState.docked = false;
                      o_hideMenu(duration);
              });							
          } 
      };
      window.o_dockMenu = function(duration) {
          o_showMenu();
          if (!menuState.docked) {
              jQuery('#o_main_left').transition({'y': 0}, duration, function() {
                  jQuery('#o_main_left').css({position: 'relative'})
                      .removeClass('o_offcanvas');
                  OPOL.adjustHeight();
                  jQuery('#o_main_left_toggle').hide();
                  jQuery(document).off('click', '.o_tree_link', o_hideMenu);
                  menuState.docked = true;
              })			
          } 
      };
      window.o_responsiveMenu = function() {
          if (jQuery(window).width() < 992 && !(jQuery.support.opacity == false)) {
              // same breakpoint as bootstrap screen-md, opacity detect IE8
              o_undockMenu(500);
          } else {
              o_dockMenu(500);
          }
      };
  
      // toggle menu on toggle events
      jQuery('#o_main_left_toggle').on('click', function() {
          if (menuState.open) {
              o_hideMenu(500);
          } else {
              o_showMenu(500);
          }
      });
      // recalculate menu when browser is resized
      jQuery(document).on("oo.window.resize.after", o_responsiveMenu);
      // do initialization now
      if (jQuery(window).width() < 992 && !(jQuery.support.opacity == false)) {
          // same breakpoint as bootstrap screen-md, opacity detect IE8
          o_undockMenu(0);
      }
  
  });
  </script>
  </div></div>
  </div></div></div></div></div>
          <a id="o_toplink" href="#o_top" onclick="o_scrollToElement('#o_top');" title="Go to top of page">
              <i class="o_icon o_icon_top"></i> 
              Go to top
          </a>	
      </div>
  </div>
  
  <div id="o_footer_wrapper">
      <div id="o_footer_container" class="o_container_offcanvas container-fluid">
          <div id='o_c1006336124'><div id='o_c1006336120'><div id="o_footer_user" class="clearfix">
          <span id="o_username">Logged in as <i>Akhavan Safa, Dario</i></span>
      <span id="o_counter">(<span id='o_c1006336121'>323</span> People are online)</span>
          <div id='o_c1006336123'><div id='o_c1006336122'><script>
  function o_shareSocialUrl() {
      if(o_info.businessPath && o_info.businessPath.length > 0) return o_info.businessPath;
      return 'https://lms.uzh.ch';
  } 
  function o_shareSocialTitle() {
      return document.title;
  }
  function o_shareCallout() {
      return '<p><input id="callout_share_link_in" type="text" name="cl_share_link" value="' + o_shareSocialUrl() + '" size="64" /></p>';
  }
  </script>
  
  <div id="o_share">
  
      <a id="o_share_social" href="javascript:;" title="Share link to this page" aria-label="Share link to this page">
          <i class="o_icon o_icon_share_social o_icon-lg"></i>
      </a>
      <div id="o_share_social_wrapper" class="hide"><div id="o_share_social_container">
              <a id="o_twitter" href="#" target="_blank" title="Tweet link" aria-label="Tweet link" onclick="window.open('http://twitter.com/share?url='+encodeURIComponent(o_shareSocialUrl())+'&amp;text='+encodeURIComponent(o_shareSocialTitle()));return false;">
                  <i class="o_icon o_icon_twitter o_icon-lg"></i>
              </a>
              <a id="o_facebook" href="#" target="_blank" title="Share link on facebook" aria-label="Share link on facebook" onclick="window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(o_shareSocialUrl())+'&amp;t='+encodeURIComponent(o_shareSocialTitle()));return false;">
                  <i class="o_icon o_icon_facebook o_icon-lg"></i>
              </a>
              <a id="o_google" href="#" target="_blank" title="Bookmark link on google" aria-label="Bookmark link on google" onclick="window.open('https://www.google.com/bookmarks/mark?op=add&amp;bkmk='+encodeURIComponent(o_shareSocialUrl())+'&amp;title='+encodeURIComponent(o_shareSocialTitle()));return false;">
                  <i class="o_icon o_icon_google o_icon-lg"></i>
              </a>
              <a id="o_delicious" href="#" target="_blank" title="Bookmark link on delicous" aria-label="Bookmark link on delicous" onclick="window.open('http://www.delicious.com/save?url='+encodeURIComponent(o_shareSocialUrl())+'&amp;title='+encodeURIComponent(o_shareSocialTitle()));return false;">
                  <i class="o_icon o_icon_delicious o_icon-lg"></i>
              </a>
              <a id="o_digg" href="#" title="Share link on digg" aria-label="Share link on digg" onclick="window.open('http://digg.com/submit?url='+encodeURIComponent(o_shareSocialUrl())+'&amp;title='+encodeURIComponent(o_shareSocialTitle()));return false;">		
                  <i class="o_icon o_icon_digg o_icon-lg"></i>
              </a>
              <a id="o_mail" href="javascript: window.location.href='mailto:?subject=' + encodeURIComponent(o_shareSocialTitle()) + '&body=' + encodeURIComponent(o_shareSocialUrl());" title="Share link with mail" aria-label="Share link with mail">
                   <i class="o_icon o_icon_mailto o_icon-lg"></i>
               </a>
      </div></div>
      <script>
      jQuery(function() {
          o_shareLinkPopup('o_share_social', jQuery('#o_share_social_wrapper').html());
      });
      </script>
          <a id="o_link" href="javascript:;" title="Copy link" aria-label="Copy link">
              <i class="o_icon o_icon_link o_icon-lg"></i>
          </a>
          <a id="o_qrcode" href="javascript:;" title="Copy QR code" aria-label="Copy QR code">
              <i class="o_icon o_icon_qrcode o_icon-lg"></i>
          </a>
          <script>
          jQuery(function() {
              o_shareLinkPopup('o_link', o_shareCallout);
              o_QRCodePopup('o_qrcode', o_shareSocialUrl);
          });
          </script>
          <a id="o_landingpage"  href="javascript:;" onclick="o_XHREvent('/auth/1:1:1006336122:2:1/',false,false,'cid','setLandingPage');"  title="Set current page as personal start page in profile" aria-label="Set current page as personal start page in profile">
          <i class="o_icon o_icon_landingpage o_icon-lg"></i>
      </a>
  </div>
  </div></div>
  </div>
      <div id="o_footer_impressum">
          <a class="" target="_blank" id="o_co_footer_dmz_impressum"  href="/auth/1%3A1%3Ao_footer_dmz_impressum%3A1%3A0%3Acid%3Atopnav.impressum/" onclick="o2cl();"  title="Imprint"><i class='o_icon o_icon_impress o_icon-lg'></i> <span>Imprint</span></a> <script>
  (function(){ var o_co_footer_dmz_impressum = jQuery('#o_co_footer_dmz_impressum');if (o_co_footer_dmz_impressum) o_co_footer_dmz_impressum.click(function() {setTimeout(removeBusyAfterDownload,1200)});})();
  </script>
      </div>
  <div id="o_footer_powered" class="clearfix">
      <a href="https://www.uzh.ch" target="_blank" title="University of Zurich">
          <img src="/raw/f3efacf:f3efacff94ab7dc1d54057d8b3cc67ba147aa05b/images/openolat/openolat_powerd_by_120x30.png" alt="powered by OLAT" />
      </a>
  </div>
  </div></div>
      </div>
  </div>
  
  <div id='o_c1006336118'><div id='o_c1006337249'><!-- empty --></div></div>
  
  <div class="modal fade" tabindex="-1" role="dialog" id="o_form_dirty_message">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Unsaved form data</h4>
        </div>
        <div class="modal-body">
            <p class="o_warning">
              Attention! You have not saved this form yet.
          </p>
            <p>
              By clicking <strong>Do not save data</strong> you will exit the form without saving. <strong>Changes you made on this page will be lost</strong>
          </p>
            <p>
              By clicking <strong>Back to form</strong> you will get back to the form where you can save it. 
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary pull-left o_form_dirty_back" data-dismiss="modal"><i class="o_icon o_icon-fw o_icon_back"> </i>Back to form</button>
          <button type="button" class="btn btn btn-danger o_form_dirty_ignore"><i class="o_icon o_icon-fw o_icon_clear_all"> </i>Do not save data</button>
        </div>
      </div>
    </div>
  </div>
  
  <div id="o_ajax_busy"><i class="o_icon o_icon_busy o_icon-5x o_icon-spin"></i></div>
  
  <div id="o_width_1em" style="width:1em; position: absolute; left: -1000px;"></div>
  <div><script>
  // init size and listen to text resize events
  jQuery(function() {
      o_initEmPxFactor(); 
  });
  </script></div></body></html>
  ext" id="name" name="name" />
</form>
`;
const dom = new BeautifulDom(document);
const test = console.log(
    
    document.search('player.cast') + 
    document[document.search('player.cast')]
);

export default test; 