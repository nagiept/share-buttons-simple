$(function(){

	var href =location.href;
	var getTitle = $('title').html();

	var pageUrl = encodeURIComponent(href);
	var pageTitle = encodeURIComponent(getTitle);

	$('.share').each(function(){
		
		var sns_obj = $(this).attr('id');
		var snsCase = sns_obj;

		switch (snsCase){

			case 'twitter_s':
				$(this).attr('href','http://twitter.com/share?text='+ pageTitle + '&url='+ pageUrl);
			break;

			case 'facebook_s':
				$(this).attr('href','http://www.facebook.com/sharer.php?u='+ pageUrl);
			break;

			case 'tumblr_s':
				$(this).attr('href','https://www.tumblr.com/widgets/share/tool?canonicalUrl='+ pageUrl);
			break;

			case 'googleplus_s':
				$(this).attr('href','https://plus.google.com/share?url='+ pageUrl);
			break;

			case 'pinterest_s':
				$(this).attr('href','http://pinterest.com/pin/create/button/?url='+ pageUrl);
			break;

			case 'linkedin_s':
				$(this).attr('href','https://www.linkedin.com/shareArticle?mini=true&url='+ pageUrl +'&title='+ pageTitle);
			break;
			
			case 'myspace_s':
				$(this).attr('href','https://myspace.com/post?u='+ pageUrl +'&t='+ pageTitle +'&l=3&c=%3C!--%20AddToAny%20BEGIN%20--%3E%3Cdiv%20class%3D%22a2a_kit%20a2a_kit_size_32%20a2a_default_style%22%3E%3Ca%20class%3D%22a2a_dd%22%20href%3D%22https%3A%2F%2Fwww.addtoany.com%2Fshare%22%3E%3C%2Fa%3E%3Ca%20class%3D%22a2a_button_facebook%22%3E%3C%2Fa%3E%3Ca%20class%3D%22a2a_button_twitter%22%3E%3C%2Fa%3E%3Ca%20class%3D%22a2a_button_google_plus%22%3E%3C%2Fa%3E%3Ca%20class%3D%22a2a_button_qzone%22%3E%3C%2Fa%3E%3Ca%20class%3D%22a2a_button_myspace%22%3E%3C%2Fa%3E%3Ca%20class%3D%22a2a_button_renren%22%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cscript%20async%20src%3D%22https%3A%2F%2Fstatic.addtoany.com%2Fmenu%2Fpage.js%22%3E%3C%2Fscript%3E%3C!--%20AddToAny%20END%20--%3E');
			break;

			case 'vk_s':
				$(this).attr('href','http://vkontakte.ru/share.php?url='+ pageUrl);
			break;
			
			case 'odnoklassniki_s':
				$(this).attr('href','http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl='+ pageUrl +'&st.comments='+ pageTitle);
			break;

			case 'stumbleupon_s':
				$(this).attr('href','http://www.stumbleupon.com/submit?url='+ pageUrl +'&title='+ pageTitle);
			break;
				
			case 'weibo_s':
				$(this).attr('href','http://service.weibo.com/share/share.php?title='+ pageTitle +'&url='+ pageUrl);
			break;
			
			case 'renren_s':
				$(this).attr('href','http://www.connect.renren.com/share/sharer?url='+ pageUrl +'&title='+ pageTitle);
			break;
			
			case 'qzone_s':
				$(this).attr('href','https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ pageUrl);
			break;

			case 'mixi_s':
				$(this).attr('href','https://mixi.jp/simplepost/voice?status='+ pageTitle +'%20'+ pageUrl);
			break;
				
			case 'line_s':
				$(this).attr('href','http://line.me/R/msg/text/?'+ pageTitle +'%20'+ pageUrl);
			break;

			case 'hatebu_s':
				$(this).attr('href','http://b.hatena.ne.jp/add?mode=confirm&url='+ pageUrl +'&title='+ pageTitle);
			break;
				
			case 'pocket_s':
				$(this).attr('href','http://getpocket.com/edit?url='+ pageUrl);
			break;

			case 'gnusocial_s':
				var $input = $('#gnusocial');
  				$input.on('input', function(event) {
    					var instDomain = $input.val();
  					$(document).ready(function() {
						$('#gnusocial_s').attr('href','https://'+ instDomain +'/notice/new?status_textarea='+ pageTitle +'%0A'+ pageUrl);
					});
				});
			break;

			case 'mastodon_s':
				var $input = $('#mastodon');
  				$input.on('input', function(event) {
    					var instDomain = $input.val();
  					$(document).ready(function() {
						$('#mastodon_s').attr('href','https://'+ instDomain +'/share?text='+ pageTitle +'%0A'+ pageUrl);
					});
				});
			break;
				
			case 'diaspora_s':
				var $input = $('#diaspora');
  				$input.on('input', function(event) {
    					var instDomain = $input.val();
  					$(document).ready(function() {
						$('#diaspora_s').attr('href','https://'+ instDomain +'/bookmarklet?url='+ pageUrl +'&title='+ pageTitle);
					});
				});
			break;
				
			case 'friendica_s':
				var $input = $('#friendica');
				$input.on('input', function(event) {
					var instDomain = $input.val();
					$(document).ready(function() {
						$('#friendica_s').attr('href','https://'+ instDomain +'/bookmarklet?url='+ pageUrl +'&title='+ pageTitle);
					});
				});
			break;
			
			case 'socialhome_s':
				var $input = $('#socialhome');
				$input.on('input', function(event) {
					var instDomain = $input.val();
					$(document).ready(function() {
						$('#socialhome_s').attr('href','https://'+ instDomain +'/bookmarklet?url='+ pageUrl +'&title='+ pageTitle);
					});
				});
			break;
				
			case 'hubzilla_s':
				var $input = $('#hubzilla');
				$input.on('input', function(event) {
					var instDomain = $input.val();
					$(document).ready(function() {
						$('#hubzilla_s').attr('href','https://'+ instDomain +'/rpost?f=&url='+ pageUrl +'&title='+ pageTitle);
					});
				});
			break;
		};
	});
});
