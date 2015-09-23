var login = (function (lightdm, $) {
	var selected_user = null;
	var password = null
	var $user = $('#user');
	var $pass = $('#pass');

	// private functions
	var setup_users_list = function () {
		var $list = $user;
		var to_append = null;
		$.each(lightdm.users, function (i) {
			var username = lightdm.users[i].name;
			var dispname = lightdm.users[i].display_name;
			$list.append(
				'<option value="'+username+'">'+dispname+'</option>'
			);
		});
	};

	var select_user_from_list = function (idx) {
		var idx = idx || 0;

		find_and_display_user_picture(idx);

		if(lightdm._username){
			lightdm.cancel_authentication();
		}

		selected_user = lightdm.users[idx].name;
		if(selected_user !== null) {
			window.start_authentication(selected_user);
		}

		$pass.trigger('focus');
		$pass.val('');
	};

	var find_and_display_user_picture = function (idx) {
		$('.profile-img').attr('src', './assets/ui/default_avatar.png');
		if(lightdm.users[idx].image != "") {
			$('.profile-img').attr('src', lightdm.users[idx].image);
		}
	};


	// Functions that lightdm needs
	window.start_authentication = function (username) {
		lightdm.cancel_timed_login();
		lightdm.start_authentication(username);
	};

	window.provide_secret = function () {
		password = $pass.val() || null;
		lightdm.provide_secret(password);
	};

	window.authentication_complete = function () {
		if (lightdm.is_authenticated) {
			lightdm.login(lightdm.authentication_user,lightdm.default_session);
		} else {
			$pass.val(''); // clear passwd field
			lightdm.start_authentication(selected_user);
		}
	};

	// init
	var init = function () {
		$(function () {
			setup_users_list();
			select_user_from_list();

			$user.on('change', function (e) {
				e.preventDefault();
				var idx = e.currentTarget.selectedIndex;
				select_user_from_list(idx);
			});						

			$('form').on('submit', function (e) {
				e.preventDefault();
				window.provide_secret();
			});
			
			document.getElementById('shutdown').addEventListener('click', function (e) {
				alert('Will shut down');
				lightdm.shutdown();
			});

			document.getElementById('reboot').addEventListener('click', function (e) {
				alert('Will restart');
				lightdm.restart();
			});

			document.getElementById('sleep').addEventListener('click', function (e) {
				alert('Will suspend');
				lightdm.suspend();
			});
		
		

		});
	};

	return {
		init: init
	};
} (lightdm, jQuery));

login.init();

