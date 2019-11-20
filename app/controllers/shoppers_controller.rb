class ShoppersController < ApplicationController
  before_action :set_student, only: [:show, :update, :destroy]
  before_action :authorize_request_shopper, except: [ :create, :destroy, :index, :login, :show]

  # GET /shoppers
  def index
    @shoppers = Shopper.all

    render json: @shoppers
  end

  # GET /shoppers/1
  def show
    render json: @shopper
  end

  # POST /shoppers
  def create
    @shopper = Shopper.new(shopper_params)

    if @shopper.save
      token = encode(shopper_id: @shopper.id, username: @shopper.username)
      render json: { shopper: @shopper, token: token }, status: :ok
    else
      render json: @shopper.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shoppers/1
  def update
    if @shopper.update(shopper_params)
      render json: @shopper
    else
      render json: @shopper.errors, status: :unprocessable_entity
    end
  end

  def login
    @shopper = Shopper.find_by_username(shopper_params[:username])
    render json: { error: @shopper}
    if @shopper.authenticate(shopper_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(shopper_id: @shopper.id, username: @shopper.username)
      render json: { shopper: @shopper, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def verify
    render json: @current_user, status: :ok
  end
  
  # DELETE /shoppers/1
  def destroy
    @shopper.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shopper
      @shopper = Shopper.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def shopper_params
      params.require(:shopper).permit(:shopper_id, :name, :address, :username, :password)
    end
end
