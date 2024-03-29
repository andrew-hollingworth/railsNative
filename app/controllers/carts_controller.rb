class CartsController < ApplicationController
    before_action :set_cart, only: [:show, :update, :destroy]
    before_action :get_models, except: [:show, :index,:destroy]

    # GET /carts
    def index
      @carts = Cart.where(shopper_id: params[:shopper_id])

      render json: @carts
    end
  
    # GET /carts/1
    def show
      @carts = Cart.all

      render json: @carts
    end
  
    # POST /carts
    def create
      @cart = Cart.new(cart_params)
  
      if @cart.save
        render json: @cart, status: :created, location: @cart
      else
        render json: @cart.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /carts/1
    def update
      if @cart.update(cart_params)
        render json: @cart
      else
        render json: @cart.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /carts/1
    def destroy
      @cart.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_cart
        @cart = Cart.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def cart_params
        params.require(:cart).permit(:shopper_id, :item_id, :quantity)
      end
end
