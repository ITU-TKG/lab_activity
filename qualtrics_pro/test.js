Qualtrics.SurveyEngine.addOnload(function()
{
	/*ページが読み込まれたときに実行するJavaScriptをここに配置してください*/
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*ページが完全に表示されたときに実行するJavaScriptをここに配置してください*/
		
	//ここで通知内容を変更
	var notificationMessage = "今日は徹夜明けなので体がだるいです";
	var notificationType = "info"; // success, error, warning, info から選択
		
	// 1秒遅延してから通知を表示
	setTimeout(function() {
		showNotification(notificationMessage, notificationType);
	}, 700); // 1000ミリ秒 = 1秒
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*ページの読み込みが解除されたときに実行するJavaScriptをここに配置してください*/
});

// 通知を表示する関数
function showNotification(message, type) {
	// 通知要素を作成
	var notification = document.createElement('div');
	notification.textContent = message;
	notification.style.cssText = 
		'position: fixed; ' +
		'top: 20px; ' +
		'right: 20px; ' +
		'padding: 15px 20px; ' +
		'border-radius: 5px; ' +
		'color: white; ' +
		'font-size: 14px; ' +
		'z-index: 10000; ' +
		'box-shadow: 0 4px 6px rgba(0,0,0,0.1); ' +
		'animation: slideIn 0.3s ease-out; ' +
		'max-width: 300px;';
	
	// タイプに応じて背景色を変更
	switch(type) {
		case 'success':
			notification.style.backgroundColor = '#4CAF50';
			break;
		case 'error':
			notification.style.backgroundColor = '#f44336';
			break;
		case 'warning':
			notification.style.backgroundColor = '#ff9800';
			break;
		case 'info':
		default:
			notification.style.backgroundColor = '#2196F3';
			break;
	}
	
	// アニメーション用のスタイルを追加
	if (!document.getElementById('notification-styles')) {
		var style = document.createElement('style');
		style.id = 'notification-styles';
		style.textContent = `
			@keyframes slideIn {
				from {
					transform: translateX(400px);
					opacity: 0;
				}
				to {
					transform: translateX(0);
					opacity: 1;
				}
			}
			@keyframes slideOut {
				from {
					transform: translateX(0);
					opacity: 1;
				}
				to {
					transform: translateX(400px);
					opacity: 0;
				}
			}
		`;
		document.head.appendChild(style);
	}
	
	// 通知をページに追加
	document.body.appendChild(notification);
	
	// 10秒後に通知を削除
	setTimeout(function() {
		notification.style.animation = 'slideOut 0.3s ease-in';
		setTimeout(function() {
			if (notification.parentNode) {
				notification.parentNode.removeChild(notification);
			}
		}, 300);
	}, 5000);
}