﻿(()=>{"use strict";var e,t,i,n,o,s,r={599013:(e,t,i)=>{i.d(t,{Likes:()=>y});var n=i(434788),o=i(538248),s=i(975969),r=i(29244),a=i(912766),_=i(272406),l=i(649638),c=i(577686),d=i(397067),u=i(547142),p=i(764646),h=i(629652),v=i(858172),w=i(672101),m=i(929234),T=i(226345),k=i(925976),O=i(146976),I=i(134915),N=i(545965),b=i(651460),g=i(333483);const y={toggle(e,t,i,n){if((0,s.cancelEvent)(t),(0,c.isObject)(window.cur)&&(0,c.isFunction)(cur.viewAsBox))return cur.viewAsBox();if(vk.widget&&!vk.id)return window.Widgets.oauth();const r=(0,o.hasClass)(e,"active");(0,o.addClass)(e,"animate"),this.clientUpdate(i,v.LikeButtonTypes.like,r?-1:1,!r),this.handleAuthorLikeInReply(i,e,r);const a=i.match(/^(video)(?!(_comment))(.*)/)?(0,I.getVideoTrackCode)():void 0,_={act:r?"a_do_unlike":"a_do_like",object:i,hash:n,list:cur.pvListId,wall:2,from:this._getReference(i),from_widget:vk.widget?1:0,track_code:a},l=()=>((0,o.toggleClass)(e,"active",r),this.clientUpdate(i,v.LikeButtonTypes.like,r?1:-1,r),this.handleAuthorLikeInReply(i,e,!r),!1);window.ajax.post("like.php",_,{onDone:t=>{if(t.unauth_action_box)return l(),void k.UnauthActionBox.show(t.unauth_action_box);this.update(i,t);const n=i.match(/^(wall|market)(.*)/);n&&cur.onLike&&cur.onLike(e,n[1],n[2],r),this.handleAuthorLikeInReply(i,e,r,t)},onFail:l});(0,c.intval)((0,o.domData)(e,"count"))>0?y.showLikes(e,i,{fast:!0}):e.tt&&e.tt.destroy&&e.tt.destroy()},_getReference:e=>cur.pvShown?"photo_viewer":e===cur.wallLayer?"wkview":window.mvcur&&window.mvcur.mvShown?"videoview":cur.wallType?"feed"===cur.wallType?"news"===cur.section?`feed_${cur.subsection?cur.subsection:cur.section}`:"recommended"===cur.section?"feed_recommended"+("recent"!==cur.subsection?"_"+cur.subsection:""):(0,a.inArray)(cur.section,["friends","groups","videos","photos"])?"feed_"+(cur.subsection?"_"+cur.subsection:""):`feed_${cur.section}`:"top"===cur.wallType?"wall_top":"wall_"+(cur.onepost?"one":(cur.wallType||"").indexOf("full_")?"page":"full"):cur.module,share(e,t={},i=void 0){if(vk.widget&&!vk.id)return window.Widgets.oauth();if((0,c.isObject)(window.cur)&&(0,c.isFunction)(cur.viewAsBox))return cur.viewAsBox();if(window.cur){const e=(0,N.getTrackCodeFromPost)(i);window.cur.shareButtonTrackCode=e}const{objectType:o,objectId:s}=(0,h.parseLikeObjectId)(e);(vk.widget?window.showBox:d.showBox)("like.php",(0,n._)({act:"publish_box",object:e,from_widget:vk.widget?1:0},t),{onDone:(e,t)=>{t.unauth_action_box&&(e.hide(),k.UnauthActionBox.show(t.unauth_action_box))},stat:[window.jsc("web/page.js"),"page.css",window.jsc("web/wide_dd.js"),"wide_dd.css",window.jsc("web/sharebox.js")]}),"wall"===o&&window.Wall&&window.Wall.triggerAdPostStat(s,"share_post"),cur.RpcMethods&&(cur.RpcMethods.likeFullUpdate=t=>y.update(e,window.cleanObj(t)))},clientUpdate(e,t,i,n){const s=this._getButtonsByType(e,t);if(!s.length)return;const r=(0,c.intval)((0,o.domData)(s[0],"count"))+i;this._updateDom(e,t,r,n),this.updateExternalIndex(e,{type:t,count:r,isActive:n})},update(e,t){if(!isNaN(parseInt(t.like_num))){const i=(0,c.isUndefined)(t.like_my)?void 0:!!(0,c.intval)(t.like_my);this._updateDom(e,v.LikeButtonTypes.like,t.like_num,i,t.like_title,t.like_from_group),this.updateExternalIndex(e,{type:v.LikeButtonTypes.like,count:t.like_num,isActive:i})}if(!isNaN(parseInt(t.share_num))){const i=(0,c.isUndefined)(t.share_my)?void 0:!!(0,c.intval)(t.share_my);this._updateDom(e,v.LikeButtonTypes.share,t.share_num,i,t.share_title),this.updateExternalIndex(e,{type:v.LikeButtonTypes.share,count:t.share_num})}if((0,a.isNumeric)(t.views_num)&&this._updateDom(e,v.LikeButtonTypes.views,t.views_num,void 0,t.views_title),(0,a.isNumeric)(t.comment_num)&&this._updateDom(e,v.LikeButtonTypes.comment,t.comment_num),t[w.REACTIONS_COUNTS_RESPONSE_FIELD]){const i=!!t.isQueueUpdate;(0,T.triggerReactionsUpdate)(e,t[w.REACTIONS_COUNTS_RESPONSE_FIELD],void 0,{isQueueUpdate:i,isUserAction:!1,previewVisibility:m.previewVisibilityUseCurrent})}},updateComments(e,t){this.update(e,{comment_num:t})},_updateDom(e,t,i,n,s,r){var l;const d=this._getButtonsByType(e,t),u=t===v.LikeButtonTypes.views;if(!(null==(l=d)?void 0:l.length))return;let w="";u?w=i:i>0&&(w=vk.widget?(0,a.formatCount)(i):(0,p.langNumeric)(i,"%s",!0)),u||(i=(0,c.intval)(i));for(let e=0;e<d.length;e++){const a=d[e];if((0,o.hasClass)(a,"no_counter"))continue;const l=u?d[e]:(0,h.getElementLikeButtonCount)(d[e]);if((0,_.animateCount)(l,w,{str:"auto",noWrapWidth:!u,noSpaceIfEmpty:!0}),(0,o.toggleClass)(a,"empty",i<=0),"boolean"==typeof n&&(0,o.toggleClass)(a,"active",n),(0,o.attr)(d[e],"data-count",i),(0,o.attr)(a,"data-combine")){const e=n?p.getLang("global_dislike"):`${p.getLang("global_like")}${i?" "+i:""}`;(0,o.attr)(a,"title")!==e&&(0,o.attr)(a,"title",e)}var m,T,k;if((0,O.updateAriaLabelCounter)(a,i,t),u)null==(k=a)||null==(T=k.closest)||null==(m=T.call(k,".like_views"))||m.setAttribute("title",s||"");const I=d[e].tt;if(I){const e=(0,o.domByClass)(I.container,"_content"),_=(0,o.domByClass)(I.container,"_value"),l=(0,o.domByClass)(I.container,"_title"),d=(0,o.domByClass)(I.container,"like_tt_group_like"),u=(0,c.intval)((0,o.val)(_));if((0,o.val)(_,i),s&&(0,o.val)(l,s),(0,c.isObject)(I)&&(I.likeInvalidated=!0),(u!==i&&u<7||!1===s)&&(t===v.LikeButtonTypes.like?a.needReinitLikesTT=!0:t===v.LikeButtonTypes.share&&(a.needReinitShareTT=!0)),t===v.LikeButtonTypes.like&&(0,o.toggleClass)(e,"me_hidden",!n),!1===s&&I.destroy&&I.destroy(),void 0!==r&&d){const e="like_tt_group_like_hidden";r?d.classList.remove(e):d.classList.add(e)}}}},_getButtonsByType:(e,t)=>(0,o.domQuery)(`._like_${e} ._${t}, ._like_${e} [data-like-button-type="${t}"]`),showLikes(e,t,i={}){var n;if(!e||!(e instanceof HTMLElement)||e.postDontShowLikes)return;if(vk.widget&&vk.show_external_auth_box)return;let s=i.views?{views:1}:i.share?{published:1}:{};i.listId&&(s.list=i.listId),i.like_hash&&(s.like_hash=i.like_hash),i.like_stats_params&&Object.assign(s,i.like_stats_params);const _=!!(0,o.geByClass1)("share",(0,o.gpeByClass)("like_wrap",e));let l=document.body,d=!1;const u=getComputedStyle(e),p=(0,c.intval)(u.getPropertyValue("padding-left").replace("px","")),v=(0,c.intval)(u.getPropertyValue("padding-top").replace("px","")),w=(0,h.getElementLikeButtonIcon)(e);let m=40;"wpost"===i.from&&(m=24);const T=[m-(0,o.getSize)(w)[0]/2-p,10-v];let k=i.cl||"";if(i.share)k+="likes_tt_share";else if(k+="likes_tt_like","widget_community"===i.from)T[0]=6;else if("wcomments"===i.from||"widget_comments"===cur.wallType){const t=16,i=10;T[0]=(0,o.getSize)(e)[0]+t-(0,o.getSize)(w)[0]/2-i}else"photo_carousel"===i.from&&(T[1]=10);if(!!(null==(n=i)?void 0:n.isFromReactionsPreview)){const t=e.querySelector("._ReactionsPreview__itemsContainer");if(t){const e=t.querySelector(".ReactionsPreviewItem"),i=(0,o.getXYRect)(e,!1),n=(i.width||0)/2;let s=n;l=t;i.left+i.width/2>window.innerWidth/2&&(d=!0,s=t.offsetWidth-n),T[0]=-s+m}}let O,I;i.share?(O="needReinitLikesTT",I="resetLikesTTTimer"):(O="needReinitShareTT",I="resetShareTTTimer"),clearTimeout(e[I]),(0,r.showTooltip)(e,{url:"/like.php",params:(0,a.extend)({act:"a_get_stats",object:t,has_share:_?1:""},s),appendEl:l,slide:15,shift:T,ajaxdt:i.fast?0:100,showdt:i.fast?0:400,hidedt:200,dir:"auto",checkLeft:!0,needLeft:d,reverseOffset:80,noZIndex:!0,hasover:!0,tip:{over:()=>{y.showLikes(e,t,i)}},typeClass:"like_tt",className:k,onHide:()=>{clearTimeout(e[I]),e[O]&&(e[I]=setTimeout((()=>{delete e[O],e.tt&&e.tt.destroy&&e.tt.destroy()}),200))}})},showShare:function(e,t,i){y.showLikes(e,t,(0,a.extend)(i,{share:1}))},updateViews:(e,t)=>{vk.widget&&vk.show_external_auth_box||window.ajax.post("like.php",{act:"a_get_stats",object:e,views:1},{cache:1,onDone(t,i){const n=(0,o.ce)("div",{innerHTML:i});y._updateDom(e,v.LikeButtonTypes.views,t,void 0,n.innerText||n.textContent)}})},makeTemplate(e,t){if(!e)return"";(t=(0,a.extend)({buttons_prepend:"",object_raw:"",likes_count:"",liked:!1,share_count:"",shared:"",views_count:"",share_opts:{},like_opts:{},class_name:"",like_cont_class:"",like_class_name:"",[w.REACTIONS_COUNTS_RESPONSE_FIELD]:"",reactions_class_name:""},t)).like_active=t.liked?"active":"",t.share_active=t.shared?"active":"",t.comment_active="",t.likes_formatted_count=t.likes_count>0?(0,p.langNumeric)(t.likes_count,"%s",!0):"",t.share_formatted_count=t.share_count>0?(0,p.langNumeric)(t.share_count,"%s",!0):"",t.share_opts=this._convertOptsToString(t.share_opts),t.like_opts=this._convertOptsToString(t.like_opts),t.like_class_name+=t.likes_count>0?"":" empty",t.share_class_name=t.share_count>0?"":"empty";const i=t[w.REACTIONS_COUNTS_RESPONSE_FIELD],n=!!i&&Object.values(i).some((e=>!!e));return t.reactions_class_name+=n?"":" PostBottomAction--empty",(0,o.rs)(e,t)},_convertOptsToString:e=>JSON.stringify(e).replace(/\"/g,"'"),updateExternalIndex(e,t={}){const{objectType:i,objectId:n}=(0,h.parseLikeObjectId)(e);switch(i){case"photo":if(!cur.pvShown||!cur.pvCurPhoto||cur.pvCurPhoto.id!==n)return;const e=cur.pvListId,i=cur.pvIndex,o=cur.pvData[e][i];t.type===v.LikeButtonTypes.like?(o.likes=t.count,o.liked=t.isActive,cur.pvCommsLikes[o.id][1]=t.count):t.type===v.LikeButtonTypes.share&&(o.shares=t.count);break;case"video":if(window.mvcur&&window.mvcur.mvShown&&window.mvcur.videoRaw===n&&t.type===v.LikeButtonTypes.like){const e=window.Videoview.getMvData();e.likes=t.count,void 0!==t.isActive&&(e.liked=t.isActive,window.Videoview.playerOnLiked(t.isActive),window.Videoview.recache())}break;case"clip":t.type===v.LikeButtonTypes.like&&window.Videoview.playerOnLiked(t.isActive)}},showLikesList(e,t){cur.viewAsBox||(0,o.hasClass)((0,o.gpeByClass)("like_btn",e),"no_counter")||(0,l.showWiki)({w:"likes/"+(0,a.clean)(t)},!1,!1,{queue:1})},showSharesList(e,t){cur.viewAsBox||(0,o.hasClass)((0,o.gpeByClass)("like_btn",e),"no_counter")||(0,l.showWiki)({w:"shares/"+(0,a.clean)(t)},!1,!1,{queue:1})},handleAuthorLikeInReply(e,t,i,n){var o,s,r,a;const{objectId:_}=(0,h.parseLikeObjectId)(e),l=(0,b.getPostElemByChildEl)(t),c=Number(null==(s=l)||null==(o=s.dataset)?void 0:o.postAuthorId),d=null==(a=l)||null==(r=a.querySelector(`.reply#post${_}`))?void 0:r.querySelector(".HighlightingAuthorLike");if(!d||!u.Ranges.isUserId(c)||vk.id!==c)return;const p="HighlightingAuthorLike--hidden";(n?n.like_my:!i)?(d.classList.remove(p),n&&(0,g.renderAuthorUserOnboardingTooltip)(d)):d.classList.add(p)}}},289252:(e,t,i)=>{var n;i.d(t,{AvailableHelpHints:()=>n}),function(e){e.ACCOUNT_HINT_NARRATIVES_ADD_TOOLTIP="narratives:add_tooltip",e.ACCOUNT_HINT_MVK_STORIES_ARCHIVE_ACTIONS_HINT="mvk:stories_archive:actions_hint",e.ACCOUNT_HINT_MINI_APPS_BUTTON_MVK_PROFILE="mini_apps:button_mvk_profile",e.ACCOUNT_HINT_MINI_APPS_BUTTON_MVK_APP_MENU="mini_apps:button_mvk_app_menu",e.ACCOUNT_HINT_MINI_APPS_COUNTER_TOGGLE_IN_ACTION_MENU="mini_apps:counter_toggle_in_action_menu",e.ACCOUNT_HINT_MINI_APPS_COUNTER_TOGGLE_IN_ACTION_MENU_INTRO="mini_apps:counter_toggle_in_action_menu_intro",e.ACCOUNT_HINT_MINI_APPS_OPEN_CATALOG_WITH_BADGES="mini_apps:open_catalog_with_badges",e.ACCOUNT_HINT_MINI_APPS_CATALOG_SECTION_WITH_BADGES="mini_apps:catalog_section_with_badges",e.ACCOUNT_HINT_SUPERAPP_RECOMMEND_ACTION_IN_MENU="superapp:recommend_action_in_menu",e.ACCOUNT_HINT_SUPERAPP_SHOW_RECOMMEND_ACTION="superapp:show_recommend_action",e.ACCOUNT_HINT_MINI_APPS_NAV_BUTTONS_THIRD_PARTY_BUTTONS="mini_apps:nav_buttons_third_party_buttons",e.ACCOUNT_HINT_POSTING_EDITOR_ORD_AD="posting:editor_ord_ad",e.ACCOUNT_HINT_PROFILE_REDESIGN_ONBOARDING_BANNER="profile:redesign_onboarding_banner",e.ACCOUNT_HINT_POSTING_EDITOR_ONLINE_BOOKING="posting:editor_online_booking",e.ACCOUNT_HINT_PROFILE_REDESIGN_ONBOARDING_BOTTOMSHEET="profile:redesign_onboarding_bottomsheet",e.ACCOUNT_HINT_PROFILE_SERVICES_MENU_BANNER="profile:services_menu_banner",e.ACCOUNT_HINT_PROFILE_SERVICES_ONBOARDING="profile:services_onboarding",e.ACCOUNT_HINT_MVK_PWA_TABBAR="mvk:pwa_tabbar",e.ACCOUNT_HINT_STORIES_EDITOR_ORD_AD="stories:editor_ord_ad",e.ACCOUNT_HINT_SUPERAPP_MVK_SHOWCASE="superapp:mvk_showcase",e.IM_INTEGRATION_APPS_TOOLTIP_ON_PICKER="superapp:im_integration_apps_tooltip_on_picker",e.ACCOUNT_HINT_IM_INTEGRATION_PICKER_APPS_BANNER="superapp:im_integration_picker_apps_banner",e.ACCOUNT_HINT_IM_INTEGRATION_PICKER_GAMES_BANNER="superapp:im_integration_picker_games_banner",e.ACCOUNT_HINT_FRIENDS_FOLLOWERS_MODE_FORCIBLY_ENABLED_ONBOARDING="friends:followers_mode_forcibly_enabled_onboarding",e.ACCOUNT_HINT_FOLLOWERS_MODE_CAN_BE_ENABLED_ONBOARDING="friends:followers_mode_can_be_enabled_onboarding",e.ACCOUNT_HINT_FRIENDS_FOLLOWERS_MODE_ABOUT_MODAL_IMAGES="friends:followers_mode_about_modal_images",e.ACCOUNT_HINT_IM_INTEGRATION_CATALOG_ONBOARDING="superapp:im_integration_catalog_onboarding",e.ACCOUNT_HINT_ONEPASS_ONBOARDING="profile:passkey_onboarding_web",e.ACCOUNT_HINT_VIDEO_INTERACTIVE_VIDEO_ONBOARDING="video:interactive_video_onboarding",e.AUTHOR_LIKE_ONBOARDING_HINT="feed:author_like_onboarding",e.GROUP_LIKE_ONBOARDING_HINT="feed:group_like_onboarding",e.ACCOUNT_HINT_COMMUNITY_REVIEW_TOOLTIP_MVK="community:review:tooltip_mvk",e.ACCOUNT_HINT_VIDEO_WATCH_LATER_BUTTON="video:watch_later_button",e.ACCOUNT_HINT_VIDEO_WATCH_LATER_ACTION="video:watch_later_action",e.ACCOUNT_HINT_VIDEO_WATCH_LATER_MENU="video:watch_later_menu"}(n||(n={}))},263885:(e,t,i)=>{var n,o,s,r=i(599013);(null==(o=window.vk)||null==(n=o.pe)?void 0:n.static_manager_dynamic_imports)&&(null==(s=window.vk)?void 0:s.stDomain)&&(i.p=window.vk.stDomain+"/dist/"),window.Likes=r.Likes;try{window.stManager.done(window.jsc("web/likes.js"))}catch(e){}},333483:(e,t,i)=>{i.d(t,{getAuthorOnboardingTooltipsSharedState:()=>_,renderAuthorUserOnboardingTooltip:()=>c,renderHelpTooltip:()=>l});var n=i(83414),o=i(289252),s=i(717755),r=i(866946),a=i(764646);const _=()=>(0,n.makeSharedState)("author-onboarding-tooltips",(()=>({isAuthorUserTooltipShown:!1,isAuthorGroupTooltipShown:!1})),{version:1}),l=(e,t,i,n)=>{const{tooltip:o}=(0,r.helpHintTooltip)(e,{content:t,onHideRequestSent:i,isServerSideHideDisabled:!0},{width:n,forceSide:"top",withCloseButton:!1,appendToParent:!0,autoAdjustToViewport:!1,offset:[2,-6],noAutoHideOnWindowClick:!1,cls:"feature_intro_tt feature_intro_blue_tt"});window.requestAnimationFrame((()=>o.show()))},c=e=>{const t=_(),i=o.AvailableHelpHints.AUTHOR_LIKE_ONBOARDING_HINT,n=(0,s.ensureAccountHelpHintsService)();n.canShow(i)&&!t().isAuthorUserTooltipShown&&(t().isAuthorUserTooltipShown=!0,l(e,a.getLang("intro_hint_description_feed_author_like_onboarding"),(()=>n.hideHelpHint({hintId:i})),225))}},629652:(e,t,i)=>{function n(e){const t=e.match(/^([a-z_]+)([0-9\-_]+)$/);if(!t)return null;const[,i,n]=t;return{objectType:i,objectId:n}}i.d(t,{getElementLikeButtonCount:()=>a,getElementLikeButtonIcon:()=>l,getElementLikeButtonLabel:()=>d,likePostObjectId:()=>o,likeReplyObjectId:()=>s,parseLikeObjectId:()=>n});const o=e=>`wall${e}`,s=e=>`wall_reply${e}`;var r;const a=e=>{var t;return null!=(r=null==(t=e)?void 0:t.querySelector(".like_button_count, ._like_button_count"))?r:void 0};var _;const l=e=>{var t;return null!=(_=null==(t=e)?void 0:t.querySelector(".like_button_icon, ._like_button_icon"))?_:void 0};var c;const d=e=>null!=(c=e.querySelector(".like_button_label, ._like_button_label"))?c:void 0},858172:(e,t,i)=>{i.d(t,{LikeButtonTypes:()=>n});const n={like:"like",share:"share",views:"views",comment:"comment"}},929234:(e,t,i)=>{i.d(t,{isIntentPreviewHidden:()=>_,isIntentPreviewInActionStatusBar:()=>a,isIntentPreviewUseCurrent:()=>l,isVariantHidden:()=>s,isVariantInActionStatusBar:()=>o,parsePreviewVariant:()=>d,previewVisibilityIntentForVariant:()=>c,previewVisibilityUseCurrent:()=>r});var n=i(378232);const o=e=>e===n.PreviewVariantActionStatusBar,s=e=>e===n.PreviewVariantHidden,r={kind:"useCurrent"},a=e=>e.kind===n.PreviewVariantActionStatusBar,_=e=>e.kind===n.PreviewVariantHidden,l=e=>"useCurrent"===e.kind,c=e=>e?{kind:e}:r,d=e=>n.PreviewVariants.includes(e)?e:void 0},378232:(e,t,i)=>{i.d(t,{PreviewVariantActionStatusBar:()=>n,PreviewVariantHidden:()=>o,PreviewVariants:()=>s});const n="action_status_bar",o="hidden",s=[n,o]},672101:(e,t,i)=>{i.d(t,{REACTIONS_COUNTS_RESPONSE_FIELD:()=>_,SIZE_128:()=>a,SIZE_32:()=>o,SIZE_40:()=>s,SIZE_96:()=>r,SUPPORTED_OBJECT_TYPES:()=>n,WK_SECTION_PREFIX_REACTIONS:()=>l});const n={wall:"wall",wall_reply:"wall_reply"},o={width:32,height:32},s={width:40,height:40},r={width:96,height:96},a={width:128,height:128},_="reactions_counts",l="reactions"},809377:(e,t,i)=>{i.d(t,{isReactionsFullUpdatePayload:()=>r,reactionsCountsOnlyUpdatePayload:()=>a,reactionsCountsUpdatePayload:()=>s});var n=i(434788),o=i(21589);const s=(e,t)=>(0,n._)({kind:o.PayloadKindFull},e,{reactionIdState:{reactionId:t.id}}),r=e=>e.kind===o.PayloadKindFull,a=e=>(0,n._)({kind:o.PayloadKindCountsOnly},e)},21589:(e,t,i)=>{i.d(t,{PayloadKindCountsOnly:()=>n,PayloadKindFull:()=>o});const n="counts_only",o="counts_with_current_reaction"},226345:(e,t,i)=>{i.d(t,{triggerReactionsUpdate:()=>a});var n=i(629652),o=i(672101),s=i(614222),r=i(809377);const a=(e,t,i,a)=>{const _=(0,n.parseLikeObjectId)(e);_&&_.objectType===o.SUPPORTED_OBJECT_TYPES.wall&&_.objectId?(0,s.emitEvent)(s.WallDataEvents.post_reactions_counts_update,function(e,t,i,n){var o,s,a;const _={counts:e,isFromWkLayer:null==(o=t)?void 0:o.isFromWkLayer,isPrimaryLikeButtonClick:null==(s=t)?void 0:s.isPrimaryLikeButtonClick,isQueueUpdate:null==(a=t)?void 0:a.isQueueUpdate,isUserAction:t.isUserAction,postFullId:i.objectId,previewVisibility:t.previewVisibility,reactionIdState:n?{reactionId:n.id}:void 0,suggestSubscribe:t.suggestSubscribe};return n?(0,r.reactionsCountsUpdatePayload)(_,n):(0,r.reactionsCountsOnlyUpdatePayload)(_)}(t,a,_,i)):_&&_.objectType===o.SUPPORTED_OBJECT_TYPES.wall_reply&&_.objectId?(0,s.emitEvent)(s.WallDataEvents.reply_reactions_counts_update,{counts:t,replyFullId:_.objectId,reactionIdState:i?{reactionId:i.id}:void 0}):console.warn("Unsupported reactions object update",e)}},614222:(e,t,i)=>{i.d(t,{WallDataEvents:()=>r,emitEvent:()=>d,registerNonGlobalNonUniqueListener:()=>c,registerUniqueListener:()=>l});var n=i(434788),o=i(874157),s=i(83414);const r={post_reactions_counts_update:"wall/post_reactions_counts_update",reply_reactions_counts_update:"wall/reply_reactions_counts_update",post_subscribe_update:"wall/post_subscribe_update"},a=(0,s.makeSharedState)("wall-data",(()=>({emitter:new o.default,keyedListeners:Object.create(null)})),{version:0}),_=(e,t,i)=>{var o,s;const r=a(),_=null==(s=r.keyedListeners)||null==(o=s[e])?void 0:o[t];return _&&r.emitter.removeListener(e,_),((e,t,i)=>{const o=a();return o.emitter.addListener(e,i),o.keyedListeners[e]=(0,n._)({},o.keyedListeners[e],{[t]:i}),()=>{var n,s;o.emitter.removeListener(e,i),(null==(n=o.keyedListeners[e])?void 0:n[t])===i&&(null==(s=o.keyedListeners[e])||delete s[t])}})(e,t,i)},l=(e,t,i)=>_(t,e,i),c=(e,t)=>((e,t)=>{const i=a();return i.emitter.addListener(e,t),()=>{i.emitter.removeListener(e,t)}})(e,t),d=(e,t)=>{a().emitter.emit(e,t)}},146976:(e,t,i)=>{i.d(t,{updateAriaLabelCounter:()=>s});var n=i(764646),o=i(858172);const s=(e,t,i)=>{if(!("number"==typeof t&&e instanceof HTMLElement&&e.classList.contains("PostBottomAction")))return;const s=(e=>{let t;switch(e){case o.LikeButtonTypes.comment:t=n.getLang("likes_comments_N_aria_short","raw");break;case o.LikeButtonTypes.like:t=n.getLang("likes_likes_N_aria_short","raw");break;case o.LikeButtonTypes.share:t=n.getLang("likes_shares_N_aria_short","raw")}return t})(i);if(!s)return;const r=(0,n.langNumeric)(t,s,!1);e.setAttribute("aria-label",r)}}},a={};function _(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return r[e].call(i.exports,i,i.exports,_),i.exports}_.m=r,e=[],_.O=(t,i,n,o)=>{if(!i){var s=1/0;for(c=0;c<e.length;c++){for(var[i,n,o]=e[c],r=!0,a=0;a<i.length;a++)(!1&o||s>=o)&&Object.keys(_.O).every((e=>_.O[e](i[a])))?i.splice(a--,1):(r=!1,o<s&&(s=o));if(r){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]},_.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return _.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,_.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);_.r(o);var s={};t=t||[null,i({}),i([]),i(i)];for(var r=2&n&&e;"object"==typeof r&&!~t.indexOf(r);r=i(r))Object.getOwnPropertyNames(r).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,_.d(o,s),o},_.d=(e,t)=>{for(var i in t)_.o(t,i)&&!_.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((t,i)=>(_.f[i](e,t),t)),[])),_.u=e=>25394===e?"web/chunks/AudioLongtapModal.2415b990.js":24817===e?"web/chunks/hls.b496ce21.js":75980===e?"web/chunks/menu_settings.d381ced2.js":9375===e?"web/chunks/voice_message_player.3f9860c5.js":28762===e?"web/chunks/speech.ed86c092.js":57468===e?"web/chunks/SilentModeForms.445886b6.js":28872===e?"web/chunks/feed-client-nav-skeleton.8453ad7f.js":35953===e?"web/chunks/feed-client-nav-async-right-block.cf45b58d.js":59240===e?"web/chunks/performance-stats.bacb2316.js":84670===e?"chunks/"+e+".2d612620.js":51615===e?"chunks/"+e+".0ac520ae.js":void 0,_.miniCssF=e=>25394===e?"web/chunks/6a66a172.css":75980===e?"web/chunks/5bbee2c9.css":57468===e?"web/chunks/a2979e7d.css":void 0,_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},_.l=(e,t,i,o)=>{if(n[e])n[e].push(t);else{var s,r;if(void 0!==i)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var c=a[l];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")=="vk:"+i){s=c;break}}s||(r=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,_.nc&&s.setAttribute("nonce",_.nc),s.setAttribute("data-webpack","vk:"+i),s.src=e),n[e]=[t];var d=(t,i)=>{s.onerror=s.onload=null,clearTimeout(u);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(i))),t)return t(i)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),r&&document.head.appendChild(s)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.p="/dist/",o=e=>new Promise(((t,i)=>{var n=_.miniCssF(e),o=_.p+n;if(((e,t)=>{for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var o=(r=i[n]).getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var r;if((o=(r=s[n]).getAttribute("data-href"))===e||o===t)return r}})(n,o))return t();((e,t,i,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=s=>{if(o.onerror=o.onload=null,"load"===s.type)i();else{var r=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,_=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");_.code="CSS_CHUNK_LOAD_FAILED",_.type=r,_.request=a,o.parentNode.removeChild(o),n(_)}},o.href=t,document.head.appendChild(o)})(e,o,t,i)})),s={22568:0},_.f.miniCss=(e,t)=>{s[e]?t.push(s[e]):0!==s[e]&&{25394:1,57468:1,75980:1}[e]&&t.push(s[e]=o(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))},(()=>{_.b=document.baseURI||self.location.href;var e={22568:0};_.f.j=(t,i)=>{var n=_.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise(((i,o)=>n=e[t]=[i,o]));i.push(n[2]=o);var s=_.p+_.u(t),r=new Error;_.l(s,(i=>{if(_.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,n[1](r)}}),"chunk-"+t,t)}},_.O.j=t=>0===e[t];var t=(t,i)=>{var n,o,[s,r,a]=i,l=0;if(s.some((t=>0!==e[t]))){for(n in r)_.o(r,n)&&(_.m[n]=r[n]);if(a)var c=a(_)}for(t&&t(i);l<s.length;l++)o=s[l],_.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return _.O(c)},i=self.webpackChunkvkweb=self.webpackChunkvkweb||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var l=_.O(void 0,[213,2067,83737,57451,71610,5038,95167],(()=>_(263885)));l=_.O(l)})();