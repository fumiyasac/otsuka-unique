class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  # ベーシック認証をかける
  if Rails.env == "production"
	  BASIC_AUTH_USER_NAME     = ENV['BASIC_AUTH_USERNAME']
	  BASIC_AUTH_USER_PASSWORD = ENV['BASIC_AUTH_PASSWORD']	
	elsif Rails.env == "development"
	  BASIC_AUTH_USER_NAME     = 'otsuka_user'
	  BASIC_AUTH_USER_PASSWORD = 'otsuka_password'
	end

  # デバイス判定
  def is_smartphone?
    ua = request.env["HTTP_USER_AGENT"]
	(ua.include?('Mobile') || ua.include?('Android'))
  end

  # kaminariのページング数
  ITEMS_PER_PAGE_CONTENTS = 10
  ITEMS_PER_PAGE_ADMIN    = 10

  # フラグの変数
  ARTICLE_PUBLISHED = 1
  ARTICLE_PENDING   = 2
  FLAG_HASH = { '公開' => ARTICLE_PUBLISHED, '非公開' => ARTICLE_PENDING }
	
	# リンクコントロール変数のハッシュ
  LINK_INTERNAL = 1
  LINK_EXTERNAL = 2	
  LINK_HASH = { '内部リンク' => LINK_INTERNAL, '外部リンク' => LINK_EXTERNAL }
  
  # IDパラメーター用文字パターン
  NUMERIC_PATTERN = /^[+-]?[0-9]+$/

end
