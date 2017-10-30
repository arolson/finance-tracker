class StocksController < ApplicationController
  def search
    ticker = params[:stock]
    if ticker
      @stock = Stock.find_by_ticker(ticker)
      @stock ||= Stock.new_from_lookup(ticker)
    end
    if @stock
      render partial: 'lookup'
      #render json: @stock
    else
      render status: :not_found, nothing: true
    end
  end
end
