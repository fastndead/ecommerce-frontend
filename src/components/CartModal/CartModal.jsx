import React from 'react';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { toggleCart, removeItemFromCart } from '../../store/actions/cart';
import './CartModal.scss';

function CartModal({
  isCartOpen, toggleCartDispatch, selectedItems, allItems, removeItemFromCartDispatch,
}) {
  const items = allItems.filter((item) => selectedItems.includes(item.id));
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: e.target.email.value,
        phone: e.target.phone.value,
        selectedItems,
      }),
    });

    if (response.ok) {
      toggleCartDispatch();
    }
  };

  return (
    <Modal
      open={isCartOpen}
      onClose={toggleCartDispatch}
      className="modal-container"
    >
      <div className="modal">
        <h2 className="modal-title">Cart</h2>
        <div className="modal-items">
          {
              items.length > 0
                ? items.map((item) => (
                  <div key={item.id} className="modal-items-item">
                    <p className="modal-items-item-name">
                      {item.name}
                    </p>
                    <p className="modal-items-item-name">
                      $
                      {item.price}
                    </p>
                    <p className="modal-items-item-name">
                      <button
                        type="button"
                        className="modal-items-item-delete"
                        onClick={() => removeItemFromCartDispatch(item.id)}
                      >
                        Delete
                      </button>
                    </p>
                  </div>
                ))
                : (
                  <div className="modal-items-not-found">
                    You have no Items yet!
                  </div>
                )
            }
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-form-caption">Please enter your contact information and we will get back to you shortly</div>
          <div className="modal-form-inputs">
            <input placeholder="Email" type="email" name="email" required/>
            <input placeholder="Phone" name="phone" required pattern="\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" />
          </div>

          <button type="submit" className="modal-order" disabled={items.length === 0 || !items}>
            Order
          </button>
        </form>


      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.isOpen,
  selectedItems: state.cart.selectedItems,
  allItems: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDispatch: () => dispatch(toggleCart()),
  removeItemFromCartDispatch: (id) => dispatch(removeItemFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
