class ApplicationController < ActionController::Base
	def angular
		render 'layouts/application'
	end
	
	protect_from_forgery with: :exception
	respond_to :json	
	
end
