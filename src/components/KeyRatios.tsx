import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { FinancialData } from "../types/financialData";

const { Text } = Typography;

interface KeyRatiosProps {
  financialData: FinancialData;
}

const KeyRatios: React.FC<KeyRatiosProps> = ({ financialData }) => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card>
          <Row gutter={16}>
            <Col span={8}>
              <Text type="secondary">Market Cap</Text>
              <div>
                <strong>{financialData.market_ap}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">Shares Outstanding</Text>
              <div>
                <strong>{financialData.shares_outstanding}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">P/E Ratio</Text>
              <div>
                <strong>{financialData.pe_ratio}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">P/S Ratio</Text>
              <div>
                <strong>{financialData.ps_ratio}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">P/B Ratio</Text>
              <div>
                <strong>{financialData.pb_ratio}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">PEG Ratio</Text>
              <div>
                <strong>{financialData.peg_ratio}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">Current Ratio</Text>
              <div>
                <strong>{financialData.current_ratio}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">Debt to Equity Ratio</Text>
              <div>
                <strong>{financialData.debt_to_equity_ratio}</strong>
              </div>
            </Col>
            <Col span={8}>
              <Text type="secondary">EPS</Text>
              <div>
                <strong>{financialData.eps}</strong>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default KeyRatios;
