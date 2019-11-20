require 'test_helper'

class ShoppersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shopper = shoppers(:one)
  end

  test "should get index" do
    get shoppers_url, as: :json
    assert_response :success
  end

  test "should create shopper" do
    assert_difference('Shopper.count') do
      post shoppers_url, params: { shopper: { address: @shopper.address, name: @shopper.name, password: @shopper.password, shopper_id: @shopper.shopper_id, username: @shopper.username } }, as: :json
    end

    assert_response 201
  end

  test "should show shopper" do
    get shopper_url(@shopper), as: :json
    assert_response :success
  end

  test "should update shopper" do
    patch shopper_url(@shopper), params: { shopper: { address: @shopper.address, name: @shopper.name, password: @shopper.password, shopper_id: @shopper.shopper_id, username: @shopper.username } }, as: :json
    assert_response 200
  end

  test "should destroy shopper" do
    assert_difference('Shopper.count', -1) do
      delete shopper_url(@shopper), as: :json
    end

    assert_response 204
  end
end
