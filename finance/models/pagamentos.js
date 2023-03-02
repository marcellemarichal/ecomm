'use strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const {
  Model
} = require('sequelize');

(sequelize, DataTypes) => {
  class Pagamentos extends Model {
    static associate(models) {
      
    }
  }
  Pagamentos.init({
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    nomeCartao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numeroCartao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isCreditCard: true
      }
    },
    vencimentoCartao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^20[2-9]{1}[0-9]{1}-[0-9]{2}$/
      }
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9]{3}$/
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['CRIADO', 'CONFIRMADO', 'CANCELADO']]
      }
    }
  }, {
    sequelize,
    modelName: 'Pagamentos',
  });
  return Pagamentos;
};

export default Pagamentos;