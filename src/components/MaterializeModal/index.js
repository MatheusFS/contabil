import React from 'react';
import { Modal, Button } from "react-materialize";

import 'material-design-icons/iconfont/material-icons.css';

import './styles.css';

function MaterializeModal({ id, trigger, title, body, action }){

    return (
    <div>
        <Modal
            actions={[
            <>
            <Button
                className="red"
                modal="close"
                node="button"
                waves="light"
            >
                Cancelar
            </Button>
            <Button
                className="blue"
                node="button"
                waves="light"
                onClick={action}
            >
                Confirmar
            </Button>
            </>
            ]}
            bottomSheet={false}
            fixedFooter={true}
            header={title}
            id={id}
            options={{
                opacity: 0.5,
                dismissible: true,
                startingTop: '4%',
                endingTop: '10%',
                inDuration: 250,
                outDuration: 250,
                preventScrolling: false,
            }}
            trigger={trigger}
            >
            { body }
        </Modal>
    </div>
    )
}

export default MaterializeModal;