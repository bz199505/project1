import React from "react";
import { Row, Col, Card, Progress } from "antd";
import { FinancialData } from "../types/financialData";

interface AnalystEstimatesProps {
  financialData: FinancialData;
}

const AnalystEstimates: React.FC<AnalystEstimatesProps> = ({
  financialData,
}) => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card>
          <div>
            {Object.entries(financialData.analyst_estimates).map(
              ([analyst, estimate]) => (
                <Row key={analyst} style={{ marginBottom: "10px" }}>
                  <Col span={8}>{analyst}</Col>
                  <Col span={16}>
                    <Progress percent={estimate * 10} showInfo={false} />
                    <span>{estimate}</span>
                  </Col>
                </Row>
              )
            )}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default AnalystEstimates;
